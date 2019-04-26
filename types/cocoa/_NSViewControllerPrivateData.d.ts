/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewControllerPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    constrainServiceScreenFrameBlock<R = CDUnknownBlockType>(): R;
    setConstrainServiceScreenFrameBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    segueDestinationOptions<R = NSDictionary>(): R;
    setSegueDestinationOptions<R = void, P0 = NSDictionary>(_v: P0): R;
    topLevelObjectsToKeepAliveFromStoryboard<R = NSArray>(): R;
    setTopLevelObjectsToKeepAliveFromStoryboard<R = void, P0 = NSArray>(_v: P0): R;
    externalObjectEntryTableForViewLoading<R = NSDictionary>(): R;
    setExternalObjectEntryTableForViewLoading<R = void, P0 = NSDictionary>(_v: P0): R;
    storyboard<R = NSStoryboard>(): R;
    setStoryboard<R = void, P0 = NSStoryboard>(_v: P0): R;
    segueTemplates<R = NSArray>(): R;
    setSegueTemplates<R = void, P0 = NSArray>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    appearanceTransitionCount<R = number>(): R;
    setAppearanceTransitionCount<R = void, P0 = number>(_v: P0): R;
    presentedViewControllers<R = NSMutableArray>(): R;
    setPresentedViewControllers<R = void, P0 = NSMutableArray>(_v: P0): R;
    childViewControllers<R = NSMutableArray>(): R;
    setChildViewControllers<R = void, P0 = NSMutableArray>(_v: P0): R;
    modalSessionForPresentedViewController<R = _NSModalSession>(): R;
    setModalSessionForPresentedViewController<R = void, P0 = _NSModalSession>(_v: P0): R;
    parentViewController<R = NSViewController>(): R;
    setParentViewController<R = void, P0 = NSViewController>(_v: P0): R;
  }
  namespace _NSViewControllerPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSViewControllerPrivateData>(): R;
      new: <R = _NSViewControllerPrivateData>() => R;
    }
  }
}
