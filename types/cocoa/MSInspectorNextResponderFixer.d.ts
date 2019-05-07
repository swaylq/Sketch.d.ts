/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorNextResponderFixer<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSInspectorNextResponderFixer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSInspectorNextResponderFixer>(): R;
      new: <R = MSInspectorNextResponderFixer>() => R;
      compareVerticalPositionOfView_withView<R = number, P0 = unknown, P1 = unknown>(_compareVerticalPositionOfView: P0, _withView: P1): R;
      compareHorizontalPositionOfView_withView<R = number, P0 = unknown, P1 = unknown>(_compareHorizontalPositionOfView: P0, _withView: P1): R;
      verticalRangeFromView_inView<R = unknown, P0 = unknown, P1 = unknown>(_verticalRangeFromView: P0, _inView: P1): R;
      viewIntersectsVertically_withView<R = boolean, P0 = unknown, P1 = unknown>(_viewIntersectsVertically: P0, _withView: P1): R;
      subviewsOfView<R = unknown, P0 = unknown>(_subviewsOfView: P0): R;
      orderedSubviewsOfView<R = unknown, P0 = unknown>(_orderedSubviewsOfView: P0): R;
      firstKeyViewForInView<R = unknown, P0 = unknown>(_firstKeyViewForInView: P0): R;
      findNextKeyViewFor_inView_alreadyProcessed<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_findNextKeyViewFor: P0, _inView: P1, _alreadyProcessed: P2): R;
      findNextKeyViewFor_inView<R = unknown, P0 = unknown, P1 = unknown>(_findNextKeyViewFor: P0, _inView: P1): R;
    }
  }
}

declare const MSInspectorNextResponderFixer: cocoa.MSInspectorNextResponderFixer.CLASS;
