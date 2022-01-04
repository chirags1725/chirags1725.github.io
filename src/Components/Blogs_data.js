const BlogData = [
  {
    id: 1,
    Title: 'Python Module: "Eel"',
    desc: "By default, the Python Eel library utilizes the Google Chrome web browser in order to run the application; however, we can also mention the browser with the help of the 'mode' option. Along with 'mode', there are few other application choices available like 'position', 'size', 'geometry', and a lot more, which are passed inside the eel.start() command. To start, Install(as 'pip install eel') and Import eel module(as import eel). Then in the work directry, pass command eel.init(). Then pass command eel.start()",
    image: "",
  },
  {
    id: 2,
    Title: "Python Module: \"Wikipedia\"",
    desc: "We can now import the entire Wikipedia! Yes, We can now import Wikipedia in Python using Wikipedia module. Use the incessant flow of knowledge with Python for daily needs. Install it as:'pip install wikipedia'. To use this module import it as 'import wikipedia'. Then make a variable as variable_name = wikipedia.page(\"topic\"). Then print as 'print(variable_name.summary)'.",
    image: "3",
  },
  {
    id: 3,
    Title: "Python Module - Delorean",
    desc: "Delorean is a really cool date/time library. Apart from having a sweet name, it's one of the more natural feeling date/time munging libraries I've used in Python. It's sort of like moment in javascript, except I laugh every time I import it. The docs are also good and in addition to being technically helpful, they also make countless Back to the Future references. Install: pip install delorean. Importing: from delorean import Delorean. Print time as print(Delorean(timezone=EST))",
    image: "3",
  },
  {
    id: 4,
    Title: "Python Module - Pyperclip",
    desc: "By using this module we can access the most time-saving copy-pasting feature in python itself. To Install: pip install pyperclip. It may be proved as a real time-saver if you want to copy some text and paste it to some of your presentations, email, or text document or if you have copied a code block and want to paste it in your python program. To Import: import pyperclip.pyperclip.copy(\"text_to_copy\") pyperclip.paste()",
    image: "",
  },
  {
    id: 5,
    Title: "Python Module - Howdoi",
    desc: "To use StackOverFlow without leaving the python editor. To install: pip install howdoi. To use import howdoi as 'import howdoi'. And just type 'howdoi use Howdoi in Python'",
    image: "",
  },
  {
    id: 6,
    Title: "Python Module - Antigravity",
    desc: " It’s basically an easter egg in Python. It is just as a medium to amuse the users. It basically takes you to the browser and shows you some memes just as a short break. To install run the following command in the command line: 'pip install antigravity'. And then just import this module as 'import antigravity'. Then you will be taken to the browser.",
    image: "",
  },
  {
    id: 7,
    Title: "Javascript Concept - Var vs. Let vs. Const",
    desc: "Var and let keywords are basically the same. But the main difference between the three is declarations and Hoisting. The var keyword can be declared any no. of times without getting an error. Whereas let keyword cannot be declared instead can be updated. On the other hand, the const variable can neither be declared nor updated, otherwise there would be an error. And the var keyword can be assinged even after calling, unlike let and const declarables.",
    image: "",
  },
  {
    id: 8,
    Title: "CSS Property - Mix-blend-mode",
    desc: "This can be considered as an imae editing tool in css. It has many value such as mix-blend-mode: normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity;. It's syntax is as: (element){mix-blend-mode : 'value'}. And  its javascript syntax is: element.style.mixBlendMode = 'value'. It's default value is normal",
    image: "",
  },
  {
    id: 9,
    Title: "CSS Property - Opacity",
    desc: "It defines the opacity of an element. Its value ranges from 0 to 1. Its values are: number(from 0 to 1), inherit, initial. It's syntax is as: (element){opacity : 'value'}. And  its javascript syntax is: element.style.opactiy = 'value'",
    image: "",
  },
  {
    id: 10,
    Title: "Python Module - FuzzyWuzzy",
    desc: "FuzzyWuzzy is a library of Python which is used for string matching. Fuzzy string matching is the process of finding strings that match a given pattern. To install type in command line : 'pip install fuzzywuzzy'. Then import as 'from fuzzywuzzy import fuzz'. Then check the strings as: \"fuzz.ratio('First String here','Second string here')\"",
    image: "",
  },
  {
    id: 11,
    Title: "Python Module - PyAztro",
    desc: "PyAztro provides horoscope info for sun signs such as Lucky Number, Lucky Color, Mood, Color, Compatibility with other sun signs, description of a sign for that day etc. To install, in command line paste the following code: 'pip install pyaztro'. To import: 'import pyaztro'. Then print your daily horoscope as: 'print(pyaztro.Aztro('{your_zodiac_sign}').{ lucky_number, color, mood, lucky_time, date_range, compatibility, current_date})'",
    image: "",
  },
  {
    id: 12,
    Title: "Python Module - PyInstaller",
    desc: "PyInstaller bundles a Python application and all its dependencies into a single package. It basically converts .py(python file) to .exe(executable file). To install, in command line paste the following code: 'pip install pyinstaller'. To import: '{no need to import as this works in command line only}'. To make .py to .exe, in command line paste: pyinstaller {name_of_python_file}.py. Then you can locate your exe file in dist folder",
    image: "",
  },
];
export default BlogData;
