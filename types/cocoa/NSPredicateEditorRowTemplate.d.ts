/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPredicateEditorRowTemplate<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
    description<R = unknown>(): R;
    _setTemplateViews<R = void, P0 = unknown>(__setTemplateViews: P0): R;
    dealloc<R = void>(): R;
    matchForPredicate<R = number, P0 = unknown>(_matchForPredicate: P0): R;
    displayableSubpredicatesOfPredicate<R = unknown, P0 = unknown>(_displayableSubpredicatesOfPredicate: P0): R;
    _predicateIsNoneAreTrue<R = boolean, P0 = unknown>(__predicateIsNoneAreTrue: P0): R;
    _rowType<R = number>(): R;
    predicateWithSubpredicates<R = unknown, P0 = unknown>(_predicateWithSubpredicates: P0): R;
    setPredicate<R = void, P0 = unknown>(_setPredicate: P0): R;
    _setCompoundPredicate<R = void, P0 = unknown>(__setCompoundPredicate: P0): R;
    _setComparisonPredicate<R = void, P0 = unknown>(__setComparisonPredicate: P0): R;
    _setModifier<R = void, P0 = number>(__setModifier: P0): R;
    _setOptions<R = void, P0 = number>(__setOptions: P0): R;
    _setRightExpressionObject<R = void, P0 = unknown>(__setRightExpressionObject: P0): R;
    _setLeftExpressionObject<R = void, P0 = unknown>(__setLeftExpressionObject: P0): R;
    _viewFromExpressionObject<R = unknown, P0 = unknown>(__viewFromExpressionObject: P0): R;
    _leftExpressionAttributeType<R = number>(): R;
    initWithCompoundTypes<R = unknown, P0 = unknown>(_initWithCompoundTypes: P0): R;
    initWithLeftExpressions_rightExpressionAttributeType_modifier_operators_options<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = number>(_initWithLeftExpressions: P0, _rightExpressionAttributeType: P1, _modifier: P2, _operators: P3, _options: P4): R;
    initWithLeftExpressions_rightExpressions_modifier_operators_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = number>(_initWithLeftExpressions: P0, _rightExpressions: P1, _modifier: P2, _operators: P3, _options: P4): R;
    _viewFromCompoundTypes<R = unknown, P0 = unknown>(__viewFromCompoundTypes: P0): R;
    _viewFromAttributeType<R = unknown, P0 = number>(__viewFromAttributeType: P0): R;
    _viewFromOperatorTypes<R = unknown, P0 = unknown>(__viewFromOperatorTypes: P0): R;
    _viewFromExpressions<R = unknown, P0 = unknown>(__viewFromExpressions: P0): R;
    _displayValueForKeyPath<R = unknown, P0 = unknown>(__displayValueForKeyPath: P0): R;
    _displayValueForConstantValue<R = unknown, P0 = unknown>(__displayValueForConstantValue: P0): R;
    _displayValueForCompoundPredicateType<R = unknown, P0 = number>(__displayValueForCompoundPredicateType: P0): R;
    _displayValueForPredicateOperator<R = unknown, P0 = unknown>(__displayValueForPredicateOperator: P0): R;
    _templateType<R = number>(): R;
    templateViews<R = NSArray>(): R;
    rightExpressionAttributeType<R = number>(): R;
    modifier<R = number>(): R;
    options<R = number>(): R;
    compoundTypes<R = NSArray>(): R;
    rightExpressions<R = NSArray>(): R;
    leftExpressions<R = NSArray>(): R;
    operators<R = NSArray>(): R;
  }
  namespace NSPredicateEditorRowTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
      alloc<R = NSPredicateEditorRowTemplate>(): R;
      new: <R = NSPredicateEditorRowTemplate>() => R;
      _bestMatchForPredicate_inTemplates_quality<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__bestMatchForPredicate: P0, _inTemplates: P1, _quality: P2): R;
      templatesWithAttributeKeyPaths_inEntityDescription<R = unknown, P0 = unknown, P1 = unknown>(_templatesWithAttributeKeyPaths: P0, _inEntityDescription: P1): R;
      _operatorsForAttributeType<R = unknown, P0 = number>(__operatorsForAttributeType: P0): R;
      _attributeDescriptionForKeyPath_inEntity<R = unknown, P0 = unknown, P1 = unknown>(__attributeDescriptionForKeyPath: P0, _inEntity: P1): R;
    }
  }
}

declare const NSPredicateEditorRowTemplate: cocoa.NSPredicateEditorRowTemplate.CLASS;
