/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInspectorBar<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    convertAttributes<R = unknown, P0 = unknown>(_convertAttributes: P0): R;
    convertFont<R = unknown, P0 = unknown>(_convertFont: P0): R;
    _setIsOwnedByTextView<R = void, P0 = boolean>(__setIsOwnedByTextView: P0): R;
    _isOwnedByTextView<R = boolean>(): R;
    inspectorBarViewDidLoad<R = void, P0 = unknown>(_inspectorBarViewDidLoad: P0): R;
    _inspectorBarView<R = unknown>(): R;
    _setWindow<R = void, P0 = unknown>(__setWindow: P0): R;
    _defaultItemGravity<R = number>(): R;
    _tile<R = void>(): R;
    _update<R = void>(): R;
    _createItemsForIdentifiers<R = unknown, P0 = unknown>(__createItemsForIdentifiers: P0): R;
    _startingWindowForSendAction<R = unknown, P0 = string>(__startingWindowForSendAction: P0): R;
    itemForIdentifier<R = unknown, P0 = unknown>(_itemForIdentifier: P0): R;
    _updateAuxiliaryViewControllerIfAvailable<R = boolean>(): R;
    _auxiliaryViewController<R = unknown>(): R;
    defaultItems<R = unknown>(): R;
    dealloc<R = void>(): R;
    delegate<R = cocoa.NSInspectorBarDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSInspectorBarDelegate>(_v: P0): R;
    window<R = cocoa.NSWindow>(): R;
    showsBaselineSeparator<R = boolean>(): R;
    setShowsBaselineSeparator<R = void, P0 = boolean>(_v: P0): R;
    visible<R = boolean>(): R;
    setVisible<R = void, P0 = boolean>(_v: P0): R;
    client<R = cocoa.NSInspectorBarClient>(): R;
    setClient<R = void, P0 = cocoa.NSInspectorBarClient>(_v: P0): R;
    items<R = cocoa.NSArray>(): R;
    defaultItemIdentifiers<R = cocoa.NSArray>(): R;
    setDefaultItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSInspectorBar<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSInspectorBar>(): R;
      new: <R = NSInspectorBar>() => R;
      _sharedSpacerItem<R = unknown>(): R;
      standardItemControllerClass<R = unknown>(): R;
      standardTextItemIdentifiers<R = unknown>(): R;
    }
  }
}

declare const NSInspectorBar: cocoa.classes.NSInspectorBar;
