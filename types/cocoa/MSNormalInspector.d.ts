/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalInspector<T0 = void, T1 = void, T2 = void> extends NSViewController, MSStackViewScrollViewDelegateProtocol, MSStylePartInspectorDelegateProtocol, MSInspectorChildControllerProtocol {
    cxx_destruct<R = void>(): R;
    fixNextResponder<R = void>(): R;
    scheduleNextResponderFixing<R = void>(): R;
    throttleNextResponderFixing<R = boolean>(): R;
    setThrottleNextResponderFixing<R = void, P0 = boolean>(_v: P0): R;
    hasScheduledNextResponderFixing<R = boolean>(): R;
    setHasScheduledNextResponderFixing<R = void, P0 = boolean>(_v: P0): R;
    scrollViewBottomConstraint<R = NSLayoutConstraint>(): R;
    setScrollViewBottomConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    scrollViewTopConstraint<R = NSLayoutConstraint>(): R;
    setScrollViewTopConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    storedPreferences<R = NSMutableDictionary>(): R;
    standardInspectors<R = MSStandardInspectorViewControllers>(): R;
    footerView<R = NSStackView>(): R;
    setFooterView<R = void, P0 = NSStackView>(_v: P0): R;
    scrollView<R = NSScrollView>(): R;
    setScrollView<R = void, P0 = NSScrollView>(_v: P0): R;
    eventHandler<R = MSEventHandler>(): R;
    setEventHandler<R = void, P0 = MSEventHandler>(_v: P0): R;
    layers<R = MSLayerArray>(): R;
    setLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
    stackView<R = MSInspectorStackView>(): R;
    setStackView<R = void, P0 = MSInspectorStackView>(_v: P0): R;
  }
  namespace MSNormalInspector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSStackViewScrollViewDelegateProtocol, MSStylePartInspectorDelegateProtocol, MSInspectorChildControllerProtocol {
      alloc<R = MSNormalInspector>(): R;
      new: <R = MSNormalInspector>() => R;
    }
  }
}

declare const MSNormalInspector: cocoa.MSNormalInspector.CLASS;
