# expo-router-navigation-bug

### Summary

The file at `app\(pages)\mypage\edit\_layout.tsx` has an effect that subscribes to the _"beforeRemove"_ event of navigation listener events. When triggered, default behavior is prevented which stops the navigation action from happening and shows the user an Alert dialog to either stay on the route or proceed with the navigation action.

If the user decides to "Discard" then `navigation.dispatch` is called with the provided dispatch action.

### Expected behavior

- The navigation action is dispatched properly after `preventDefault()` in a `beforeRemove` navigation listener and then invoking `navigation.dispatch` with a replace action manually.

### Current behavior

- The navigation action is NOT dispatched properly after `preventDefault()` in a `beforeRemove` navigation listener and then invoking `navigation.dispatch` with a replace action manually.

_Worth noting_: If you comment out `e.preventDefault()` and the Alert code from the useEffect, `router.replace` button works as expected

### Tested on

- Android native build via `npx expo run:android`
