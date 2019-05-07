/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberSelectionLayoutProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    selectionLayoutAttributesForItemAtIndex_withState_inLayout_presentationItemAttributes_inView<R = NSScrubberLayoutAttributes, P0 = number, P1 = unknown, P2 = NSScrubberItemLayout, P3 = NSSet, P4 = NSView>(_selectionLayoutAttributesForItemAtIndex: P0, _withState: P1, _inLayout: P2, _presentationItemAttributes: P3, _inView: P4): R;
    selectionLayoutAttributesForState_inLayout_presentationItemAttributes_inView<R = NSSet, P0 = unknown, P1 = NSScrubberItemLayout, P2 = NSSet, P3 = NSView>(_selectionLayoutAttributesForState: P0, _inLayout: P1, _presentationItemAttributes: P2, _inView: P3): R;
    itemAlignment<R = number>(): R;
    setItemAlignment<R = void, P0 = number>(_v: P0): R;
    floatingSelection<R = boolean>(): R;
    setFloatingSelection<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSScrubberSelectionLayoutProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
