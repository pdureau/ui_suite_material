.PHONY: check

check:
	- composer validate --no-check-all --strict
	- prettier --write *.yml
	- prettier --write templates/patterns/*/*.yml
	- twig-lint lint templates/
