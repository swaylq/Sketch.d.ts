/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAction<T0 = void, T1 = void, T2 = void> extends NSResponder, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    handlesKeyEvent<R = boolean, P0 = unknown>(_handlesKeyEvent: P0): R;
    submenuActionIDs<R = unknown>(): R;
    containsActionWithID<R = boolean, P0 = unknown>(_containsActionWithID: P0): R;
    doPerformAction<R = void, P0 = unknown>(_doPerformAction: P0): R;
    cleanName<R = unknown>(): R;
    performAction<R = void, P0 = unknown>(_performAction: P0): R;
    contextForActionObservers<R = unknown>(): R;
    imageForToolbarCustomisationSheet<R = unknown>(): R;
    makeToolbarItemForToolbar<R = unknown, P0 = boolean>(_makeToolbarItemForToolbar: P0): R;
    validateToolbarItem<R = void>(): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    menuItems<R = unknown>(): R;
    menuItemsForMenu<R = unknown, P0 = unknown>(_menuItemsForMenu: P0): R;
    isSelectable<R = boolean>(): R;
    toolbarItem<R = NSToolbarItem>(): R;
    setToolbarItem<R = void, P0 = NSToolbarItem>(_v: P0): R;
    controller<R = MSActionController>(): R;
    setController<R = void, P0 = MSActionController>(_v: P0): R;
    isActive<R = boolean>(): R;
    hasSubMenu<R = boolean>(): R;
    validationStatus<R = number>(): R;
    validate<R = boolean>(): R;
    shortcutCharacter<R = number>(): R;
    label<R = NSString>(): R;
    image<R = NSImage>(): R;
    imageName<R = NSString>(): R;
    hasDynamicTitle<R = boolean>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    tooltip<R = NSString>(): R;
    mayShowInToolbar<R = boolean>(): R;
    labelForToolbarCustomisationSheet<R = NSString>(): R;
    imageForToolbar<R = NSImage>(): R;
    labelForToolbar<R = NSString>(): R;
    menuItemForToolbarItem<R = NSMenuItem>(): R;
    labelForMenu<R = NSString>(): R;
    preferredMenuAction<R = string>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder, NSMenuDelegateProtocol {
      alloc<R = MSAction>(): R;
      new: <R = MSAction>() => R;
      classNamesToImageNamesDictionary<R = unknown>(): R;
      imageName<R = unknown>(): R;
    }
  }
}

declare const MSAction: cocoa.MSAction.CLASS;
