/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignObjectMenuBuilder<T = any> extends cocoa.MSSortableObjectMenuBuilder {
    buildMenuItemsForMenu_withAction<R = unknown, P0 = unknown, P1 = unknown>(_buildMenuItemsForMenu: P0, _withAction: P1): R;
    buildMenuItemsForMenu_withTarget_selector<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_buildMenuItemsForMenu: P0, _withTarget: P1, _selector: P2): R;
    menuItemForLibrary_mainMenu_target_selector<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown, P3 = string>(_menuItemForLibrary: P0, _mainMenu: P1, _target: P2, _selector: P3): R;
    gatherSymbolsForMenus<R = unknown>(): R;
    initWithProvider_delegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithProvider: P0, _delegate: P1): R;
    initWithCollector_delegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithCollector: P0, _delegate: P1): R;
    collector<R = cocoa.MSForeignObjectCollector>(): R;
    setCollector<R = void, P0 = cocoa.MSForeignObjectCollector>(_v: P0): R;
    requiresLocalSubmenu<R = boolean>(): R;
    setRequiresLocalSubmenu<R = void, P0 = boolean>(_v: P0): R;
    filter<R = cocoa.CDUnknownBlockType>(): R;
    setFilter<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface MSForeignObjectMenuBuilder<T = any> extends cocoa.classes.MSSortableObjectMenuBuilder {
      alloc<R = MSForeignObjectMenuBuilder>(): R;
      new: <R = MSForeignObjectMenuBuilder>() => R;
      filterForReplacingSymbolInstances<R = cocoa.CDUnknownBlockType, P0 = unknown>(_filterForReplacingSymbolInstances: P0): R;
    }
  }
}

declare const MSForeignObjectMenuBuilder: cocoa.classes.MSForeignObjectMenuBuilder;
