/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindIndicator<T0 = void, T1 = void, T2 = void> extends NSObject, NSImmediateActionAnimationControllerProtocol {
    focusUAZoom<R = void>(): R;
    _cancel<R = void>(): R;
    _fade<R = void, P0 = number>(__fade: P0): R;
    _dissolve_animate<R = void, P0 = number, P1 = boolean>(__dissolve: P0, _animate: P1): R;
    _pulse<R = void, P0 = number>(__pulse: P0): R;
    dissolve<R = void>(): R;
    pulseWithFade_andDissolve<R = void, P0 = boolean, P1 = boolean>(_pulseWithFade: P0, _andDissolve: P1): R;
    pulseAndFade<R = void, P0 = boolean>(_pulseAndFade: P0): R;
    _redrawReusingWindows<R = void>(): R;
    _buildFindIndicatorWindows<R = unknown>(): R;
    _contentImage<R = unknown>(): R;
    _cacheDisplayInRect_ofView_toBitmapImageRep<R = void, P0 = CGRect, P1 = unknown, P2 = unknown>(__cacheDisplayInRect: P0, _ofView: P1, _toBitmapImageRep: P2): R;
    _findIndicatorPathForRects<R = unknown, P0 = unknown>(__findIndicatorPathForRects: P0): R;
    _indicatorWindowGroupsOfRectGroupsForRects<R = unknown, P0 = unknown>(__indicatorWindowGroupsOfRectGroupsForRects: P0): R;
    _effectiveParentWindow<R = unknown>(): R;
    updateWithRects<R = void, P0 = unknown>(_updateWithRects: P0): R;
    dealloc<R = void>(): R;
    imageProvider<R = CDUnknownBlockType>(): R;
    setImageProvider<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    contentDrawer<R = CDUnknownBlockType>(): R;
    setContentDrawer<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    textFinder<R = NSTextFinder>(): R;
    setTextFinder<R = void, P0 = NSTextFinder>(_v: P0): R;
    usesThreadedAnimation<R = boolean>(): R;
    setUsesThreadedAnimation<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = NSFindIndicatorDelegate>(): R;
    setDelegate<R = void, P0 = NSFindIndicatorDelegate>(_v: P0): R;
    parentWindow<R = NSWindow>(): R;
    setParentWindow<R = void, P0 = NSWindow>(_v: P0): R;
    visible<R = boolean>(): R;
    setVisible<R = void, P0 = boolean>(_v: P0): R;
    rects<R = NSArray>(): R;
    setRects<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFindIndicator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSImmediateActionAnimationControllerProtocol {
      alloc<R = NSFindIndicator>(): R;
      new: <R = NSFindIndicator>() => R;
      endDrawing<R = void>(): R;
      beginDrawing<R = void>(): R;
      isDrawing<R = boolean>(): R;
    }
  }
}

declare const NSFindIndicator: cocoa.NSFindIndicator.CLASS;
