# Running CPMS webapp in a developer sandbox

* Option 1 - Docker
  * Build the Docker image: `docker -t cpms_web .`
  * Run the Docker container: `docker run --rm --name webapp cpms_web
* Option 2 - Nginx
  * Install nginx
  * Determine where your nginx looks for additional server config files (default /usr/local/etc/nginx/servers)
  * Either symlink or copy the file there:
    * `ln -s $(pwd)/nginx_configs/nginx_web_main.conf.localhost /usr/local/etc/nginx/servers/`
    * `cp nginx_configs/nginx_web_main.conf.localhost /usr/local/etc/nginx/servers/`
  * Run nginx with the prefix argument set to the root of cpms_web_main: `nginx -p $(pwd) -g "daemon off;`

