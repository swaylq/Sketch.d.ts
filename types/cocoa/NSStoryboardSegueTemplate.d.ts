/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardSegueTemplate<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    perform<R = void, P0 = unknown>(_perform: P0): R;
    _perform<R = void, P0 = unknown>(__perform: P0): R;
    segueWithDestinationViewController<R = unknown, P0 = unknown>(_segueWithDestinationViewController: P0): R;
    newDefaultPerformHandlerForSegue<R = CDUnknownBlockType, P0 = unknown>(_newDefaultPerformHandlerForSegue: P0): R;
    newDefaultPrepareHandlerForSegue<R = CDUnknownBlockType, P0 = unknown>(_newDefaultPrepareHandlerForSegue: P0): R;
    targetController<R = unknown>(): R;
    effectiveSegueClass<R = unknown>(): R;
    dealloc<R = void>(): R;
    destinationControllerIdentifier<R = NSString>(): R;
    performOnViewLoad<R = boolean>(): R;
    setPerformOnViewLoad<R = void, P0 = boolean>(_v: P0): R;
    controller<R = unknown>(): R;
    setController<R = void, P0 = unknown>(_v: P0): R;
    storyboard<R = NSStoryboard>(): R;
    setStoryboard<R = void, P0 = NSStoryboard>(_v: P0): R;
    identifier<R = NSString>(): R;
  }
  namespace NSStoryboardSegueTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSStoryboardSegueTemplate>(): R;
      new: <R = NSStoryboardSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardSegueTemplate: cocoa.NSStoryboardSegueTemplate.CLASS;
