sdk=1.16

all: addon-sdk-$(sdk)

addon-sdk-$(sdk).tar.gz:
	wget https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/addon-sdk-$(sdk).tar.gz

addon-sdk-$(sdk): addon-sdk-$(sdk).tar.gz
	tar -xzvf addon-sdk-$(sdk).tar.gz

clean:
	rm -rf addon-sdk-$(sdk)

clean-all:
	make clean
	rm addon-sdk-$(sdk).tar.gz

.PHONY: all clean clean-all
