# Introduction
**TSCopyPaste**(Cross platform) helps us copy and paste mutiple texts.  
"Copy" and "Paste" can the frequently actions in daily work, and we need to copy lots of items sometimes, however, we can only two shortcuts: <kbd>Control/Command</kbd> + <kbd>C</kbd> and <kbd>Control/Command</kbd> + <kbd>C</kbd>.   
It's convenient if there exsit mutilple shortcuts like:  
<kbd>Control/Command</kbd> + <kbd>F1</kbd> (Copy item1), <kbd>Control/Command</kbd> + <kbd>1</kbd> (Paste item1)  
<kbd>Control/Command</kbd> + <kbd>F2</kbd> (Copy item2), <kbd>Control/Command</kbd> + <kbd>2</kbd> (Paste item2)   
...  


# Screeshot
![](http://terry-su.github.io/images/201708101956.png)



# Usage
Assume we'd like copy text1, text2, text3 on windows
1. Copy "text1" with <kbd>Ctrl</kbd> + <kbd>C</kbd>
1. Save it to storage with  <kbd>Ctrl</kbd> + <kbd>F1</kbd>
1. Copy "text2" with <kbd>Ctrl</kbd> + <kbd>C</kbd>
1. Save it to storage with  <kbd>Ctrl</kbd> + <kbd>F2</kbd>
1. Copy "text3" with <kbd>Ctrl</kbd> + <kbd>C</kbd>
1. Save it to storage with  <kbd>Ctrl</kbd> + <kbd>F3</kbd>  

And if we would paste text2, just: 
1. Press <kbd>Ctrl</kbd> + <kbd>2</kbd>
2. Press <kbd>Ctrl</kbd> + <kbd>V</kbd>  

if would paste text3, just:
1. Press <kbd>Ctrl</kbd> + <kbd>3</kbd>
2. Press <kbd>Ctrl</kbd> + <kbd>V</kbd>  


# Config your shortkeys
We can custom or add shortkeys in `config.json`, and it's synchronic to update the view of elctron app


# Getting Started
Clone the project, and install the dependencies   
```
npm install
```
Start app
```
npm start
```


# More
In fact, it's easy to find some tools that already achieved this on the internet. It may be `...extraordinary shortcuts.exe`, which may be unsafe.  
All roads lead to Rome, i found [electron](https://electron.atom.io/) extremely great and safe when i developed a cross platform desktop app. So, i try to achieve the goal with `electron` and it turns out okay.   
Why just okay? Because `electron` do not support invoking system's `copy` or `paste` method by shortcuts directly, so we have to store clipboard text to storage(after coping) or load storage to clipboard(before pasting). But it doesn't matter too much either. Done is better than perfect!

# Contributing
If you found somewhere in codes to be improved or fixed, or just make a suggestion, don't hesitate to send a pull request!

