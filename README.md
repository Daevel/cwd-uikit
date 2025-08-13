# Code With Daevel Uikit

This guide explains how to set up your Angular project to begin using CodeWithDaevel Uikit.

It includes information on prerequisites, installing CodeWithDaevel Uikit, and optionally displaying a sample.

Uikit component in your application to verify your setup.

To install the library, run:

```bash
npm install @daevel/uikit
```

## Display a component

Let's display a button component in your app and verify that everything works.

You need to import the CwdButtonComponent that you want to display by adding the following lines to your standalone component's imports, or otherwise your component's NgModule.

```typescript
import {CwdButtonComponent} from 'cwd/uikit';
    @Component ({
    imports: [
        CwdButtonComponent,
    ],
    })
    class AppComponent();
```

Add the 'cwd-button' tag to the app.component.html like so:

```html
  <cwd-button>Click me!<cwd-button>
```

## Run your local dev server

```bash
npm start
```

Then point your browser to http://localhost:4200

You should see the Uikit button component on the page.
