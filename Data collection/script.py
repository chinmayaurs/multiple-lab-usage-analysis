#!/usr/bin/python
from __future__ import division         #getting float value after division without casting
import os                               #for retreving file systems
import subprocess                       #for executing bash in python
import json                             #for json parsing
import requests                         #For api call
from uuid import getnode                #for MAC extraction
# from collections import OrderedDict     #for arranging dictionary elements in order
labname='lab3'
url = '<Database server url>' #update MongoDB URL HERE
headers = {'content-type': 'application/json'}

#-----------------------------------def for finding different extensions counts--------------------------------------------------------------------
def count_all_ext ( path ):
    res = {}
    for root,dirs,files in os.walk( path ):
        for f in files :
            if '.' in f :			#to avoid hidden file use# if f.rsplit('.',1)[0]!= '':
                e = f.rsplit('.',1)[1]
                res[e] = res.setdefault(e,0)+1
    return res.items()

op= '\n'.join( '%s:%d'%i for i in count_all_ext('/home'))
# print op
sample = op.replace('\n',',').split(',')
# print sample
# final_data = {a:int(b) for a, b in [i.split(":") for i in sample]}
# print type(final_data)
final_data = {}
for data in sample:
    item = data.split(':')
    if len(item)==2:
        final_data[item[0]] = int(item[1])
# print type(final_data)
file_ext_count={'file_ext_count':final_data}
# print file_ext_count

#----------------------------------def for finding size of different extensions---------------------------------------------------------------------
def sizeof_extensions ( path ):
    res1 = {}
    for root,dirs,files in os.walk( path ):
        for f in files :
            if '.' in f :
                statinfo = os.stat(os.path.join(root,f))
                e = f.rsplit('.',1)[1]
                #res.setdefault(e,[]).append((statinfo.st_size))
		res1.setdefault(e,[]).append((statinfo.st_size))
    # print res.items()
    return res1.items()

op1= '\n'.join( '{}:{}'.format(key, round((sum(array)/1024**2),4)) for key,array in sizeof_extensions('/home'))
# print op
sample1 = op1.replace('\n',',').split(',')
# print sample
# final_data = {a:float(b) for a, b in [i.split(":") for i in sample]}
# print type(final_data)
# print final_data
final_data1 = {}
for data in sample1:
    item = data.split(':')
    if len(item)==2:
        final_data1[item[0]] = float(item[1])
# print type(final_data1)
file_ext_size={'file_ext_size':final_data1}
# print file_ext_size
file_ext_count.update(file_ext_size)        #merging file_ext_count and file_ext_size

#-----------------------------------------storage---------------------------------------------------------------------------
st = os.statvfs('/home')#finding storage
free = (st.f_bavail * st.f_frsize)/1024.0**3
total = (st.f_blocks * st.f_frsize)/1024.0**3
used = ((st.f_blocks - st.f_bfree) * st.f_frsize)/1024.0**3
storage={'storage_in_gb':{'free_space':round(free,4),'total_space':round(total,4),'used_space':round(used,4)}}
# print type(storage)
file_ext_count.update(storage)#merging updated file_ext_count and storage

#-----------------------------------Mac address----------------------------------------------------------------------------------------------

mac = {'machine_address':format(getnode(),'x'),'lab':labname}
print mac
file_ext_count.update(mac)
# # json_op=json.dumps(file_count,ensure_ascii=False)
# # print json_op

# # # print "----------------------------------------------------------------------------"
network_data = subprocess.check_output("vnstat -d -i wlp2s0 --json | jq -r '.interfaces[0].traffic.total'", shell=True)
# print type(network_data)#type of data observed is string
network_dict = {'network_usage':json.loads(network_data)}#parsing string to json
# print(type(network_dict))
print network_dict
network_dict.update(file_ext_count)
# # print network_dict
js_val=json.dumps(network_dict)

response = requests.post(url, data=js_val,headers=headers)
print response.text
print response.status_code
