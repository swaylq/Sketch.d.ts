/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTemplate<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSUserInterfaceItemIdentificationProtocol {
    setUserInterfaceItemIdentifier<R = void, P0 = unknown>(_setUserInterfaceItemIdentifier: P0): R;
    userInterfaceItemIdentifier<R = unknown>(): R;
    nibInstantiate<R = unknown>(): R;
    isRestorable<R = boolean>(): R;
    setRestorable<R = void, P0 = boolean>(_setRestorable: P0): R;
    collectionBehavior<R = number>(): R;
    setCollectionBehavior<R = void, P0 = number>(_setCollectionBehavior: P0): R;
    animationBehavior<R = number>(): R;
    setAnimationBehavior<R = void, P0 = number>(_setAnimationBehavior: P0): R;
    contentBorderThicknessForEdge<R = number, P0 = number>(_contentBorderThicknessForEdge: P0): R;
    setContentBorderThickness_forEdge<R = void, P0 = number, P1 = number>(_setContentBorderThickness: P0, _forEdge: P1): R;
    autorecalculatesContentBorderThicknessForEdge<R = boolean, P0 = number>(_autorecalculatesContentBorderThicknessForEdge: P0): R;
    setAutorecalculatesContentBorderThickness_forEdge<R = void, P0 = boolean, P1 = number>(_setAutorecalculatesContentBorderThickness: P0, _forEdge: P1): R;
    setShowsToolbarButton<R = void, P0 = boolean>(_setShowsToolbarButton: P0): R;
    showsToolbarButton<R = boolean>(): R;
    setContentMinSize<R = void, P0 = CGSize>(_setContentMinSize: P0): R;
    contentMinSize<R = CGSize>(): R;
    setContentMaxSize<R = void, P0 = CGSize>(_setContentMaxSize: P0): R;
    contentMaxSize<R = CGSize>(): R;
    setWindowBackingLocation<R = void, P0 = number>(_setWindowBackingLocation: P0): R;
    windowBackingLocation<R = number>(): R;
    setWindowSharingType<R = void, P0 = number>(_setWindowSharingType: P0): R;
    windowSharingType<R = number>(): R;
    setToolbar<R = void, P0 = unknown>(_setToolbar: P0): R;
    toolbar<R = unknown>(): R;
    autorecalculatesKeyViewLoop<R = boolean>(): R;
    setAutorecalculatesKeyViewLoop<R = void, P0 = boolean>(_setAutorecalculatesKeyViewLoop: P0): R;
    hasShadow<R = boolean>(): R;
    setHasShadow<R = void, P0 = boolean>(_setHasShadow: P0): R;
    allowsToolTipsWhenApplicationIsInactive<R = boolean>(): R;
    setAllowsToolTipsWhenApplicationIsInactive<R = void, P0 = boolean>(_setAllowsToolTipsWhenApplicationIsInactive: P0): R;
    setMaxSize<R = void, P0 = CGSize>(_setMaxSize: P0): R;
    maxSize<R = CGSize>(): R;
    setMinSize<R = void, P0 = CGSize>(_setMinSize: P0): R;
    minSize<R = CGSize>(): R;
    frameAutosaveName<R = unknown>(): R;
    setFrameAutosaveName<R = void, P0 = unknown>(_setFrameAutosaveName: P0): R;
    setInterfaceStyle<R = void, P0 = number>(_setInterfaceStyle: P0): R;
    interfaceStyle<R = number>(): R;
    setAutoPositionMask<R = void, P0 = number>(_setAutoPositionMask: P0): R;
    autoPositionMask<R = number>(): R;
    setWantsToBeColor<R = void, P0 = boolean>(_setWantsToBeColor: P0): R;
    wantsToBeColor<R = boolean>(): R;
    setHidesOnDeactivate<R = void, P0 = boolean>(_setHidesOnDeactivate: P0): R;
    hidesOnDeactivate<R = boolean>(): R;
    setReleasedWhenClosed<R = void, P0 = boolean>(_setReleasedWhenClosed: P0): R;
    isReleasedWhenClosed<R = boolean>(): R;
    setDeferred<R = void, P0 = boolean>(_setDeferred: P0): R;
    isDeferred<R = boolean>(): R;
    setDynamicDepthLimit<R = void, P0 = boolean>(_setDynamicDepthLimit: P0): R;
    hasDynamicDepthLimit<R = boolean>(): R;
    setOneShot<R = void, P0 = boolean>(_setOneShot: P0): R;
    isOneShot<R = boolean>(): R;
    setBackingType<R = void, P0 = number>(_setBackingType: P0): R;
    backingType<R = number>(): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    styleMask<R = number>(): R;
    windowClassForNibInstantiate<R = unknown>(): R;
    setClassName<R = void, P0 = unknown>(_setClassName: P0): R;
    className<R = unknown>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    title<R = unknown>(): R;
    dealloc<R = void>(): R;
    maxFullScreenContentSizeIsSet<R = boolean>(): R;
    setMaxFullScreenContentSizeIsSet<R = void, P0 = boolean>(_v: P0): R;
    minFullScreenContentSizeIsSet<R = boolean>(): R;
    setMinFullScreenContentSizeIsSet<R = void, P0 = boolean>(_v: P0): R;
    level<R = number>(): R;
    setLevel<R = void, P0 = number>(_v: P0): R;
    titlebarAppearsTransparent<R = boolean>(): R;
    setTitlebarAppearsTransparent<R = void, P0 = boolean>(_v: P0): R;
    titleVisibility<R = number>(): R;
    setTitleVisibility<R = void, P0 = number>(_v: P0): R;
    tabbingMode<R = number>(): R;
    setTabbingMode<R = void, P0 = number>(_v: P0): R;
    tabbingIdentifier<R = NSString>(): R;
    setTabbingIdentifier<R = void, P0 = NSString>(_v: P0): R;
    contentViewController<R = NSViewController>(): R;
    setContentViewController<R = void, P0 = NSViewController>(_v: P0): R;
    appearance<R = NSAppearance>(): R;
    setAppearance<R = void, P0 = NSAppearance>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    maxFullScreenContentSize<R = CGSize>(): R;
    setMaxFullScreenContentSize<R = void, P0 = CGSize>(_v: P0): R;
    minFullScreenContentSize<R = CGSize>(): R;
    setMinFullScreenContentSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace NSWindowTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSUserInterfaceItemIdentificationProtocol {
      alloc<R = NSWindowTemplate>(): R;
      new: <R = NSWindowTemplate>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSWindowTemplate: cocoa.NSWindowTemplate.CLASS;
