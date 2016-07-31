import os , sys

def goBack(path):
	return os.path.abspath(os.path.join(path, os.pardir))

def pathToFile(path,file):
	return os.path.abspath(os.path.join(path, file))

def compile(template,data):
	f = open(template,"r")
	templateContent = f.read()
	keys = data.keys()
	for key in keys:
		REGEX = "{"+key+"}"
		position = templateContent.index(REGEX)
		templateContent = templateContent[0:position]+data[key]+templateContent[position+len(REGEX):]
	return templateContent
def main(spath,dpath):
	dirs = os.listdir( spath )
	for file in dirs:
		if file != ".DS_Store":
			filePath = pathToFile(spath,file)
			dpathTemp = pathToFile(dpath,file)
			if os.path.isdir(filePath):
				if not os.path.isdir(dpathTemp):
					os.mkdir(dpathTemp)
				main(filePath,dpathTemp)
			else:
				srcFileObj = open(filePath,"r")
				destFileObj = open(dpathTemp,"w")
				isBlogActive = ""
				if "/blog/" in filePath:
					isBlogActive = "active"
				destFileObj.write(compile(templatePath,{'content':srcFileObj.read(),'is-blog-active':isBlogActive}))

mypath = os.getcwd()
srcpath = pathToFile(mypath,"content")
destpath = mypath
templatePath = pathToFile(mypath,"template")

main(srcpath,destpath)