/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionTextFieldContainer<T0 = void, T1 = void, T2 = void> extends NSView {
    textFieldAtIndex<R = unknown, P0 = number>(_textFieldAtIndex: P0): R;
    selectPreviousCandidate<R = boolean>(): R;
    selectNextCandidate<R = boolean>(): R;
    setSelectedCandidate<R = void, P0 = number>(_setSelectedCandidate: P0): R;
    indexOfCandidateContainingPoint<R = number, P0 = CGPoint>(_indexOfCandidateContainingPoint: P0): R;
    setDismissButtonLocation<R = void, P0 = number>(_setDismissButtonLocation: P0): R;
    setCandidates_andCorrectionPanelType<R = void, P0 = unknown, P1 = number>(_setCandidates: P0, _andCorrectionPanelType: P1): R;
    setTextAttributes<R = void, P0 = unknown>(_setTextAttributes: P0): R;
    correction<R = unknown>(): R;
    dismissButtonLocation<R = number>(): R;
    hasSelection<R = boolean>(): R;
    numberOfCandidates<R = number>(): R;
  }
  namespace NSCorrectionTextFieldContainer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCorrectionTextFieldContainer>(): R;
      new: <R = NSCorrectionTextFieldContainer>() => R;
    }
  }
}

declare const NSCorrectionTextFieldContainer: cocoa.NSCorrectionTextFieldContainer.CLASS;
