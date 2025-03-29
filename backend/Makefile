.DEFAULT_GOAL := start

PROJECT_ROOT := .
CMD_DIR := $(PROJECT_ROOT)/cmd/ambulance-api-service
GENERATOR_CFG := $(PROJECT_ROOT)/generator-cfg.yaml
DOCKER_IMAGE := openapitools/openapi-generator-cli
DOCKER_COMPOSE_FILE := $(PROJECT_ROOT)/deployments/docker-compose/compose.yaml
DOCKER_COMPOSE_CMD := docker compose --file $(DOCKER_COMPOSE_FILE)

export AMBULANCE_API_ENVIRONMENT := Development
export AMBULANCE_API_PORT := 8080
export AMBULANCE_API_MONGODB_USERNAME := root
export AMBULANCE_API_MONGODB_PASSWORD := neUhaDnes

.PHONY: start
start: mongo-up ## Start the service and MongoDB (stops MongoDB on exit)
	@echo "==> Starting service (Env: $(AMBULANCE_API_ENVIRONMENT), Port: $(AMBULANCE_API_PORT))"
	@trap '$(DOCKER_COMPOSE_CMD) down' EXIT; \
	go run $(CMD_DIR)

.PHONY: openapi
openapi: ## Generate OpenAPI specification via Docker
	@echo "==> Generating OpenAPI specification"
	docker run --rm -v $(PROJECT_ROOT):/local $(DOCKER_IMAGE) generate -c /local/scripts/generator-cfg.yaml

.PHONY: mongo-up
mongo-up: ## Start MongoDB via Docker Compose in detached mode
	@echo "==> Starting MongoDB..."
	$(DOCKER_COMPOSE_CMD) up --detach

.PHONY: mongo-down
mongo-down: ## Stop MongoDB via Docker Compose
	@echo "==> Stopping MongoDB..."
	$(DOCKER_COMPOSE_CMD) down

.PHONY: help
help: ## Display this help screen
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-20s %s\n", $$1, $$2}'

