import os
from plyer import notification

os.system('D:')
os.system('cd d:/react/portfolio')

os.system('git add -A')
os.system('git commit -m "init"')
os.system('git push')

os.system('npm run deploy')

notification.notify(title="Update.py",message="Successfully updated")