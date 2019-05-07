/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionTextView<T0 = void, T1 = void, T2 = void> extends NSView {
    accessibilityElements<R = unknown>(): R;
    selectPreviousCandidate<R = boolean>(): R;
    selectNextCandidate<R = boolean>(): R;
    setSelectedCandidate<R = void, P0 = number>(_setSelectedCandidate: P0): R;
    setDismissButtonLocation<R = void, P0 = number>(_setDismissButtonLocation: P0): R;
    _dismissButtonIsPressed<R = void>(): R;
    drawImage<R = boolean, P0 = CGRect>(_drawImage: P0): R;
    setCandidates_andCorrectionPanelType<R = void, P0 = unknown, P1 = number>(_setCandidates: P0, _andCorrectionPanelType: P1): R;
    setCorrectionAttributes<R = void, P0 = unknown>(_setCorrectionAttributes: P0): R;
    _updateFrame<R = void>(): R;
    _setButtonImage<R = void, P0 = unknown>(__setButtonImage: P0): R;
    _extraWidthForViewHeight<R = number, P0 = number>(__extraWidthForViewHeight: P0): R;
    correctionPanelType<R = number>(): R;
    correctionPanel<R = NSCorrectionPanel>(): R;
    setCorrectionPanel<R = void, P0 = NSCorrectionPanel>(_v: P0): R;
    dismissButtonLocation<R = number>(): R;
    useDefaultStringAttributes<R = boolean>(): R;
    setUseDefaultStringAttributes<R = void, P0 = boolean>(_v: P0): R;
    hasSelection<R = boolean>(): R;
    correction<R = NSString>(): R;
  }
  namespace NSCorrectionTextView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCorrectionTextView>(): R;
      new: <R = NSCorrectionTextView>() => R;
    }
  }
}

declare const NSCorrectionTextView: cocoa.NSCorrectionTextView.CLASS;
