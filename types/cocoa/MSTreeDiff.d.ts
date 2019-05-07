/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTreeDiff<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    containsLayerWithTraits<R = boolean, P0 = number>(_containsLayerWithTraits: P0): R;
    someChangedPropertiesExhibitTrait_allKeysWereCompared<R = boolean, P0 = number, P1 = string>(_someChangedPropertiesExhibitTrait: P0, _allKeysWereCompared: P1): R;
    changedPropertiesAllExhibitTrait_allKeysWereCompared<R = boolean, P0 = number, P1 = string>(_changedPropertiesAllExhibitTrait: P0, _allKeysWereCompared: P1): R;
    buildPropertyTraitsIfNeeded<R = void>(): R;
    description<R = unknown>(): R;
    overlayDirtyDiffRectForPage<R = CGRect, P0 = unknown>(_overlayDirtyDiffRectForPage: P0): R;
    contentDirtyDiffRectForPage<R = CGRect, P0 = unknown>(_contentDirtyDiffRectForPage: P0): R;
    addDiffPairForFirstObject_secondObject<R = void, P0 = unknown, P1 = unknown>(_addDiffPairForFirstObject: P0, _secondObject: P1): R;
    diffObject_withObject<R = void, P0 = unknown, P1 = unknown>(_diffObject: P0, _withObject: P1): R;
    diffObjects_withObjects<R = void, P0 = unknown, P1 = unknown>(_diffObjects: P0, _withObjects: P1): R;
    diffs<R = unknown>(): R;
    initWithFirstDocument_secondDocument<R = unknown, P0 = unknown, P1 = unknown>(_initWithFirstDocument: P0, _secondDocument: P1): R;
    subTreeRootContainsSymbolChange<R = boolean, P0 = unknown>(_subTreeRootContainsSymbolChange: P0): R;
    symbolsChanged<R = boolean>(): R;
    traitsCalculated<R = boolean>(): R;
    setTraitsCalculated<R = void, P0 = boolean>(_v: P0): R;
    allTraitsCompared<R = boolean>(): R;
    setAllTraitsCompared<R = void, P0 = boolean>(_v: P0): R;
    allTraits<R = number>(): R;
    setAllTraits<R = void, P0 = number>(_v: P0): R;
    combinedTraits<R = number>(): R;
    setCombinedTraits<R = void, P0 = number>(_v: P0): R;
    secondObjectAncestorStack<R = NSMutableArray>(): R;
    setSecondObjectAncestorStack<R = void, P0 = NSMutableArray>(_v: P0): R;
    firstObjectAncestorStack<R = NSMutableArray>(): R;
    setFirstObjectAncestorStack<R = void, P0 = NSMutableArray>(_v: P0): R;
    mutableDiffs<R = NSMutableArray>(): R;
    setMutableDiffs<R = void, P0 = NSMutableArray>(_v: P0): R;
    secondDoc<R = MSImmutableDocumentData>(): R;
    setSecondDoc<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    firstDoc<R = MSImmutableDocumentData>(): R;
    setFirstDoc<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
  }
  namespace MSTreeDiff {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTreeDiff>(): R;
      new: <R = MSTreeDiff>() => R;
    }
  }
}

declare const MSTreeDiff: cocoa.MSTreeDiff.CLASS;
