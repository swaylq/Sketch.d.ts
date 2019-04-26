/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableArray<T0 = void, T1 = void, T2 = void> {
    // + NSMutableArray(NSComboBoxCellDataSource): 
    comboBoxCell_indexOfItemWithStringValue<R = number, P0 = unknown, P1 = unknown>(_comboBoxCell: P0, _indexOfItemWithStringValue: P1): R;
    comboBoxCell_objectValueForItemAtIndex<R = unknown, P0 = unknown, P1 = number>(_comboBoxCell: P0, _objectValueForItemAtIndex: P1): R;
    numberOfItemsInComboBoxCell<R = number, P0 = unknown>(_numberOfItemsInComboBoxCell: P0): R;
    // + NSMutableArray(NSKeyValueSorting): 
    sortUsingDescriptors<R = void, P0 = unknown>(_sortUsingDescriptors: P0): R;
    // + NSMutableArray(NSMutableArray): 
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    removeObjectsFromIndices_numIndices<R = void, P0 = number, P1 = number>(_removeObjectsFromIndices: P0, _numIndices: P1): R;
    classForCoder<R = unknown>(): R;
    // + NSMutableArray(NSMutableRangeArray): 
    replaceRangeAtIndex_withRange<R = void, P0 = number, P1 = _NSRange>(_replaceRangeAtIndex: P0, _withRange: P1): R;
    removeLastRange<R = void>(): R;
    addRange<R = void, P0 = _NSRange>(_addRange: P0): R;
    removeRangeAtIndex<R = void, P0 = number>(_removeRangeAtIndex: P0): R;
    insertRange_atIndex<R = void, P0 = _NSRange, P1 = number>(_insertRange: P0, _atIndex: P1): R;
    // + NSMutableArray(NSPredicateSupport): 
    filterUsingPredicate<R = void, P0 = unknown>(_filterUsingPredicate: P0): R;
    // + NSMutableArray(MochaAdditions): 
    mo_setObject_forIndexedSubscript<R = void, P0 = unknown, P1 = NSUInteger>(_mo_setObject: P0, _forIndexedSubscript: P1): R;
    // + NSMutableArray(SVGNodeAdditions): 
    removeAttributeWithName<R = void, P0 = unknown>(_removeAttributeWithName: P0): R;
    addAttributeWithName_percentageFractionalValue<R = void, P0 = unknown, P1 = number>(_addAttributeWithName: P0, _percentageFractionalValue: P1): R;
    addAttributeWithName_percentageValue<R = void, P0 = unknown, P1 = number>(_addAttributeWithName: P0, _percentageValue: P1): R;
    addAttributeWithName_numberValue<R = void, P0 = unknown, P1 = number>(_addAttributeWithName: P0, _numberValue: P1): R;
    addAttributeWithName_pixelValue<R = void, P0 = unknown, P1 = number>(_addAttributeWithName: P0, _pixelValue: P1): R;
    addAttributeWithName_stringValue<R = void, P0 = unknown, P1 = unknown>(_addAttributeWithName: P0, _stringValue: P1): R;
    addAttributeForID<R = void, P0 = unknown>(_addAttributeForID: P0): R;
    indexOfAttributeWithName<R = number, P0 = unknown>(_indexOfAttributeWithName: P0): R;
  }
  namespace NSMutableArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSMutableArray(SVGNodeAdditions): 
      illegalIdentifierChars<R = unknown>(): R;
    }
  }
}

declare const NSMutableArray: cocoa.NSMutableArray.CLASS;
