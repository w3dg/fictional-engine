#! /bin/bash

# initial updates
sudo apt update
sudo apt upgrade -y
# may not need to reboot. only if the previous command says requires reboot
# look for message *** System restart required *** in MOTD
sudo reboot

# wait for reboot...

sudo apt dist-upgrade -y
# may not need to reboot. only if the previous command says requires reboot
# look for message *** System restart required *** in MOTD
sudo reboot

# Install Oh My Bash
sh -c "$(curl -fsSL https://raw.github.com/ohmybash/oh-my-bash/master/tools/install.sh)"

sudo hostname something-cool

# YOU MUST RUN THE NEXT 2 commands together before exiting or you will not be able to SSH back in!
sudo ufw enable && sudo ufw allow ssh

# nginx setup

sudo apt install nginx -y
sudo ufw allow 'Nginx HTTP'
sudo ufw allow 'Nginx HTTPS'

# docker setup

sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
apt-cache policy docker-ce
sudo apt install docker-ce -y
sudo usermod -aG docker ${USER}

# logout and log back in

# Update docker-compose version: https://github.com/docker/compose/releases

sudo curl -L https://github.com/docker/compose/releases/download/1.25.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# lets encrypt
# https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/

sudo add-apt-repository ppa:certbot/certbot
sudo apt update
sudo apt install python-certbot-nginx -y

sudo nginx -t && sudo nginx -s reload

sudo certbot --nginx -d somethingcool.com
