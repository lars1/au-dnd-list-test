# au-dnd-list-test

Just reproducing a performance problem with DnD on a long list containing quite a few child components. 

Keywords: aurelia, bcx-aurelia-reorderable-repeat

## Knobs you can turn

Removing filler-components in row-item.html speeds things up. 

Reducing the amount of items created in app.js speeds things up significantly. 

