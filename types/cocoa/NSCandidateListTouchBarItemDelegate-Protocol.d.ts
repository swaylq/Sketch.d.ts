/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateListTouchBarItemDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    candidateListTouchBarItem_changedCandidateListVisibility<R = void, P0 = NSCandidateListTouchBarItem, P1 = boolean>(_candidateListTouchBarItem: P0, _changedCandidateListVisibility: P1): R;
    candidateListTouchBarItem_endSelectingCandidateAtIndex<R = void, P0 = NSCandidateListTouchBarItem, P1 = number>(_candidateListTouchBarItem: P0, _endSelectingCandidateAtIndex: P1): R;
    candidateListTouchBarItem_changeSelectionFromCandidateAtIndex_toIndex<R = void, P0 = NSCandidateListTouchBarItem, P1 = number, P2 = number>(_candidateListTouchBarItem: P0, _changeSelectionFromCandidateAtIndex: P1, _toIndex: P2): R;
    candidateListTouchBarItem_beginSelectingCandidateAtIndex<R = void, P0 = NSCandidateListTouchBarItem, P1 = number>(_candidateListTouchBarItem: P0, _beginSelectingCandidateAtIndex: P1): R;
  }
  namespace NSCandidateListTouchBarItemDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
