/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPageListController<T0 = void, T1 = void, T2 = void> extends MSSidebarListController, BCOutlineViewDataControllerDataSourceProtocol, BCOutlineViewDataControllerDelegateProtocol {
    pasteboardWriterClass<R = unknown>(): R;
    duplicatePages<R = void, P0 = unknown>(_duplicatePages: P0): R;
    removePageWithValidation<R = void, P0 = unknown>(_removePageWithValidation: P0): R;
    addPage_after<R = void, P0 = unknown, P1 = unknown>(_addPage: P0, _after: P1): R;
    dataController_removeNodes<R = void, P0 = unknown, P1 = unknown>(_dataController: P0, _removeNodes: P1): R;
    pageForNode<R = unknown, P0 = unknown>(_pageForNode: P0): R;
    selectedPages<R = NSArray>(): R;
    setSelectedPages<R = void, P0 = NSArray>(_v: P0): R;
    defaultFirstResponder<R = NSView>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPageListController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSidebarListController, BCOutlineViewDataControllerDataSourceProtocol, BCOutlineViewDataControllerDelegateProtocol {
      alloc<R = MSPageListController>(): R;
      new: <R = MSPageListController>() => R;
    }
  }
}

declare const MSPageListController: cocoa.MSPageListController.CLASS;
