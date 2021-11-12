---
slug: "/tutorial/elements-keyword"
lang: en
title: "Elements and keywords"
---


This chapter will take you to understand the relationship between elements and keywords.

## Basic concept
The creation, deletion, and disappearance of any element can be regarded as a change in the screen. These changes must be in a certain keyword (<span style="background: yellow">yellow highlight</span>).
The range of keywords includes the space before the first word in the word, but does not include the space after the last word.

## Create, delete, transform, disappear

Creation and disappearance correspond to the appearance and disappearance of elements in the screen respectively.

The element that disappeared must have been created before.

The positions of elements created, disappeared, and transformed will follow the current **cursor** position.

However, note that there are 3 situations:
-If the cursor is in a certain keyword, the creation and disappearance of the element are all in the **current** keyword.
The deleted element depends on which keyword it was created in.
-If the cursor is in a non-keyword and there is a keyword in front of it (only in this paragraph), then the creation and disappearance of the element are all in the nearest keyword in front.
The deleted element also depends on which previous keyword it was created in
-If the cursor is in a non-keyword, but there is no keyword in front (this paragraph only), the element will be in the arrow at the beginning of the paragraph,
Tap → or ↳ to see.

The transform button allows the element to be transformed after it appears. The same element can have multiple changes after multiple keywords appear.
Also, deleting the current element will not delete the element before the transformation, and the element that will be transformed again afterwards.

You can set transition animations for the appearance (creation) and disappearance of elements.
The transformation animation cannot be set at present, and there will be an automatic transition animation for each element.

For more animation concepts and settings, you can [see here](/tutorial/make-animation).

### Create
In the toolbar, you can select any button to create an element.
You can place the mouse on any icon, and the created element type corresponding to the button will be displayed after a short while.

### Paste
-If there is a picture in the clipboard (gif is also available, sometimes it doesn't work), right-click on the blank area of ​​the screen on the right and select **Paste**.
You can use the shortcut key Ctrl+V.

-If there is text in the clipboard, you need to create a text box first, and then paste it when the text box is focused.

-If the clipboard is an element copied elsewhere (which can be in another document), then pasting will create a new element.

## Element type
The elements that can be added to the screen are

### Word
The text box.
### picture
It supports bitmaps (such as jpg, png) and vector svg.

And it can also be a dynamic gif.
However, the imported gif will automatically become a video, because it is easy to control the playback and progress bar.

### Video
Support most video formats. However, mp4 and webm are best.
If you import videos in other formats, the software will first convert to the above formats, which will be slower and take up more space.

The current video support level is not very good. Not suitable for a large number of videos as material, and will be gradually improved in the future.

### Shape
Support some basic graphics such as boxes and ellipses.
### Connect
The default is straight line. You can set the head and tail arrows.
If you need a curve or a polyline, you can use the mouse to **double-click** anywhere on the line segment to create a turning point.
### Lens
Through the control of the lens, the visual effect of zooming in and out of the screen can be achieved.

Specifically for the settings of various elements, when the element is focused, the settings box in the lower right corner can be set.

## Scope of elements
Each paragraph is an independent paragraph, just like a slide in a PPT.
Therefore, if the elements of this paragraph are not set to **disappear** at the end, they will automatically **disappear** when entering the next paragraph.

Of course, if the previous paragraph is closely related to this paragraph, the previous elements need to be retained. You can click → at the beginning of the paragraph,
Then turn on the switch, and the beginning of the paragraph is changed to ↳.