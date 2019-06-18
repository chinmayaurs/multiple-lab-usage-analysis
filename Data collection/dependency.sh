#!/bin/bash
sudo apt-get install vnstat
sudo vnstat -u -i enp1s0
vnstat --iflist
sudo /etc/init.d/vnstat start
sudo chown -R vnstat:vnstat /var/lib/vnstat
# for jq in bash
sudo echo "deb http://us.archive.ubuntu.com/ubuntu vivid main universe" >> /etc/apt/sources.list

#sudo gedit /etc/apt/sources.list
#deb http://us.archive.ubuntu.com/ubuntu vivid main universe
sudo apt-get update
sudo apt-get install jq

