all:
	@uglifyjs -nc -o uuid-v4.min.js uuid-v4.js

clean:
	@rm uuid-v4.min.js

.PHONY: clean all