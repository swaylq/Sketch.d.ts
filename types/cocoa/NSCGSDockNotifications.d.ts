/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSDockNotifications<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSCGSDockNotifications<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGSDockNotifications>(): R;
      new: <R = NSCGSDockNotifications>() => R;
      addSelectWindowHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addSelectWindowHandler: P0): R;
      addResolutionChangedHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addResolutionChangedHandler: P0): R;
      addRectChangedHandlerWithOrder_block<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_addRectChangedHandlerWithOrder: P0, _block: P1): R;
      addRectChangedHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addRectChangedHandler: P0): R;
      addRestoreEffectDoneHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addRestoreEffectDoneHandler: P0): R;
      addMinimizeEffectDoneHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addMinimizeEffectDoneHandler: P0): R;
      addMiniViewShownHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addMiniViewShownHandler: P0): R;
      addMiniViewHiddenHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addMiniViewHiddenHandler: P0): R;
      addMaximizedWindowsHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addMaximizedWindowsHandler: P0): R;
      addGetAppMenuHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addGetAppMenuHandler: P0): R;
      addDockDiedHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addDockDiedHandler: P0): R;
      addDockAliveHandlerWithOrder_block<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_addDockAliveHandlerWithOrder: P0, _block: P1): R;
      addDockAliveHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addDockAliveHandler: P0): R;
      addDoMenuCommandHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_addDoMenuCommandHandler: P0): R;
    }
  }
}

declare const NSCGSDockNotifications: cocoa.classes.NSCGSDockNotifications;
