        location /sfapp/ {
            alias /var/sfapp/build/;
            index index.html;
            try_files $uri $uri/ /app2/index.html;
        }
    