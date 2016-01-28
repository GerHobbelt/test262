OUT_DIR ?= out
SRC_DIR ?= src
PUBLISH_DIR ?= test
UPSTREAM ?= git@github.com:tc39/test262.git

.PHONY: build
build: build-static build-cases

.PHONY: build-static
build-static:
	cp -r $(SRC_DIR)/static $(OUT_DIR)

.PHONY: build-cases
build-cases:
	./tools/generation/compile.py \
		--no-clobber $(SRC_DIR)/static \
		--out $(OUT_DIR) \
		$(SRC_DIR)/cases/

.PHONY: clean
clean:
	rm -rf $(OUT_DIR) $(OUT_DIR).tmp

# Check out the `master` branch and replace the previous commit's tests with
# the latest build. This allows for the `master` branch history to describe
# changes in the generated files (which would not be possible with an "orphan"
# git branch).
.PHONY: deploy
deploy: clean build
	mv $(OUT_DIR) $(OUT_DIR).tmp
	git checkout master
	rm -r $(PUBLISH_DIR)
	mv $(OUT_DIR).tmp $(PUBLISH_DIR)
	git add --all $(PUBLISH_DIR)
	git commit -m 'Re-build from source'
	git push $(UPSTREAM) master
	git checkout -
