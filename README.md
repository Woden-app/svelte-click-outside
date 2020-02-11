# svelte-click-outside
An action that provides click outside detection for Svelte

## Installation
### Npm
    npm install --save @woden/svelte-click-outside
### Yarn
    yarn add @woden/svelte-click-outside
    
## Basic Usage
Import the package and use it as an action, provide a parameter which is the action you would like to fire when clickOutside is detected

```html
<script>
import clickOutside from '@woden/svelte-click-outside'

const myFunction = () => console.log('this will be displayed if I click outside the button')
</script>

<button use:clickOutside={myFunction}>My super button</button>
```
