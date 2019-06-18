steps to follow data collection:
1. copy this folder into host machine.
2.Then set the permission for "dependency.sh" to execute by command "chmod +x dependency.sh"
3. Run the Bash script as "./dependency.sh"
4. All the library required to run script will be installed by above bash script.
4. Then run the python script "python script.py"
5. "script.py" extracts the data and parse it as JSON objects to MLAB cloud database.  
To automate the script to run daily once create the daemon process using cronjob usig command
 In "crontab -e" add line " 0 0 * * * ./python script.py" 
Thus if we install this script to each machines it will automatically generates Json objects and parse to cloud data base by itself.
