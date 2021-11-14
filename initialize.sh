#!/bin/bash

echo 'Creating the Database...'
mysql -u root -plocalhost -e "create database if not exists todoitems_db";

echo
echo ====================
echo

cd client
bash client-installer.sh

echo
echo ====================
echo

cd ../server
bash server-installer.sh

echo
echo ====================
echo

echo 'Press any key to exit...'
read key