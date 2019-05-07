/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSInspectorFlowHandlerDelegateProtocol {
    flowAnimationButtons<R = unknown>(): R;
    flowAnimationTypes<R = unknown>(): R;
    validateFlowAnimationButtonForFlow<R = void, P0 = unknown>(_validateFlowAnimationButtonForFlow: P0): R;
    followFlowAction<R = void, P0 = unknown>(_followFlowAction: P0): R;
    changeFlowAnimationAction<R = void, P0 = unknown>(_changeFlowAnimationAction: P0): R;
    flowHandler<R = MSInspectorFlowHandler>(): R;
    setFlowHandler<R = void, P0 = MSInspectorFlowHandler>(_v: P0): R;
    flowAnimationSlideFromTopButton<R = NSButton>(): R;
    setFlowAnimationSlideFromTopButton<R = void, P0 = NSButton>(_v: P0): R;
    flowAnimationSlideFromLeftButton<R = NSButton>(): R;
    setFlowAnimationSlideFromLeftButton<R = void, P0 = NSButton>(_v: P0): R;
    flowAnimationSlideFromBottomButton<R = NSButton>(): R;
    setFlowAnimationSlideFromBottomButton<R = void, P0 = NSButton>(_v: P0): R;
    flowAnimationSlideFromRightButton<R = NSButton>(): R;
    setFlowAnimationSlideFromRightButton<R = void, P0 = NSButton>(_v: P0): R;
    flowAnimationInstantButton<R = NSButton>(): R;
    setFlowAnimationInstantButton<R = void, P0 = NSButton>(_v: P0): R;
    flowDestinationButton<R = NSPopUpButton>(): R;
    setFlowDestinationButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
  }
  namespace MSFlowInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSInspectorFlowHandlerDelegateProtocol {
      alloc<R = MSFlowInspectorItem>(): R;
      new: <R = MSFlowInspectorItem>() => R;
    }
  }
}

declare const MSFlowInspectorItem: cocoa.MSFlowInspectorItem.CLASS;
