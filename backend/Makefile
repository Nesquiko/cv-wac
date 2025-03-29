.DEFAULT_GOAL := start

# Variables
PROJECT_ROOT := .
CMD_DIR := $(PROJECT_ROOT)/cmd/main.go
GENERATOR_CFG := $(PROJECT_ROOT)/generator-cfg.yaml
DOCKER_IMAGE := openapitools/openapi-generator-cli

export AMBULANCE_API_ENVIRONMENT := Development
export AMBULANCE_API_PORT := 8080

.PHONY: openapi
start:
	@echo "==> Starting service (Env: $(AMBULANCE_API_ENVIRONMENT), Port: $(AMBULANCE_API_PORT))"
	go run $(CMD_DIR)

.PHONY: openapi
openapi:
	@echo "==> Generating OpenAPI specification"
	docker run --rm -v $(PROJECT_ROOT):/local $(DOCKER_IMAGE) generate -c /local/generator-cfg.yaml
