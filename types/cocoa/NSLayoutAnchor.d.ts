/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutAnchor<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    constraintLessThanOrEqualToAnchor<R = unknown, P0 = unknown>(_constraintLessThanOrEqualToAnchor: P0): R;
    constraintGreaterThanOrEqualToAnchor<R = unknown, P0 = unknown>(_constraintGreaterThanOrEqualToAnchor: P0): R;
    constraintEqualToAnchor<R = unknown, P0 = unknown>(_constraintEqualToAnchor: P0): R;
    constraintLessThanOrEqualToAnchor_constant<R = unknown, P0 = unknown, P1 = number>(_constraintLessThanOrEqualToAnchor: P0, _constant: P1): R;
    constraintGreaterThanOrEqualToAnchor_constant<R = unknown, P0 = unknown, P1 = number>(_constraintGreaterThanOrEqualToAnchor: P0, _constant: P1): R;
    constraintEqualToAnchor_constant<R = unknown, P0 = unknown, P1 = number>(_constraintEqualToAnchor: P0, _constant: P1): R;
    _constraintAttribute<R = number>(): R;
    _constraintItem<R = unknown>(): R;
    nsli_lowerIntoExpression_withCoefficient_forConstraint<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_nsli_lowerIntoExpression: P0, _withCoefficient: P1, _forConstraint: P2): R;
    description<R = unknown>(): R;
    _referencingConstraints<R = unknown>(): R;
    _isReferencedByConstraint<R = boolean, P0 = unknown>(__isReferencedByConstraint: P0): R;
    constraintsAffectingLayout<R = unknown>(): R;
    hasAmbiguousLayout<R = boolean>(): R;
    _dependentVariables<R = unknown>(): R;
    _valueInEngine<R = number, P0 = unknown>(__valueInEngine: P0): R;
    _equationDescriptionLegendEntries<R = unknown>(): R;
    _equationDescriptionInParent<R = unknown>(): R;
    equationDescription<R = unknown>(): R;
    isCompatibleWithAnchor<R = boolean, P0 = unknown>(_isCompatibleWithAnchor: P0): R;
    validateOtherAttribute<R = boolean, P0 = number>(_validateOtherAttribute: P0): R;
    _referencedLayoutItems<R = unknown>(): R;
    _accumulateReferenceLayoutItemsIntoTable<R = void, P0 = unknown>(__accumulateReferenceLayoutItemsIntoTable: P0): R;
    _expressionInContext<R = unknown, P0 = unknown>(__expressionInContext: P0): R;
    _anchorVariableRestriction<R = number>(): R;
    _anchorVariable<R = unknown>(): R;
    _variableName<R = unknown>(): R;
    _referenceItem<R = unknown>(): R;
    _referenceView<R = unknown>(): R;
    initWithIndependentVariableName_item_symbolicAttribute<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithIndependentVariableName: P0, _item: P1, _symbolicAttribute: P2): R;
    _proxiedAttribute<R = number>(): R;
    _proxiedItem<R = unknown>(): R;
    initWithItem_attribute<R = unknown, P0 = unknown, P1 = number>(_initWithItem: P0, _attribute: P1): R;
    item<R = unknown>(): R;
    anchorWithName<R = unknown, P0 = unknown>(_anchorWithName: P0): R;
    anchorWithName_referenceItem_symbolicAttribute<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_anchorWithName: P0, _referenceItem: P1, _symbolicAttribute: P2): R;
    name<R = unknown>(): R;
    _expressionInDefaultContextWithEngine<R = unknown, P0 = unknown>(__expressionInDefaultContextWithEngine: P0): R;
    _constituentAnchors<R = unknown>(): R;
    _nearestAncestorLayoutItem<R = unknown>(): R;
    _anchorType<R = number>(): R;
    initWithAnchor<R = unknown, P0 = unknown>(_initWithAnchor: P0): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithName_referenceItem_symbolicAttribute<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithName: P0, _referenceItem: P1, _symbolicAttribute: P2): R;
    rulesAffectingLayout<R = unknown>(): R;
    observableValueInItem<R = unknown, P0 = unknown>(_observableValueInItem: P0): R;
    valueInItem<R = number, P0 = unknown>(_valueInItem: P0): R;
    _expressionForValueInItem<R = unknown, P0 = unknown>(__expressionForValueInItem: P0): R;
    ruleLessThanOrEqualToAnchor_multiplier_constant_priority_identifier<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number, P4 = unknown>(_ruleLessThanOrEqualToAnchor: P0, _multiplier: P1, _constant: P2, _priority: P3, _identifier: P4): R;
    ruleGreaterThanOrEqualToAnchor_multiplier_constant_priority_identifier<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number, P4 = unknown>(_ruleGreaterThanOrEqualToAnchor: P0, _multiplier: P1, _constant: P2, _priority: P3, _identifier: P4): R;
    ruleEqualToAnchor_multiplier_constant_priority_identifier<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number, P4 = unknown>(_ruleEqualToAnchor: P0, _multiplier: P1, _constant: P2, _priority: P3, _identifier: P4): R;
    ruleLessThanOrEqualToAnchor_constant_priority_identifier<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_ruleLessThanOrEqualToAnchor: P0, _constant: P1, _priority: P2, _identifier: P3): R;
    ruleGreaterThanOrEqualToAnchor_constant_priority_identifier<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_ruleGreaterThanOrEqualToAnchor: P0, _constant: P1, _priority: P2, _identifier: P3): R;
    ruleEqualToAnchor_constant_priority_identifier<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_ruleEqualToAnchor: P0, _constant: P1, _priority: P2, _identifier: P3): R;
    ruleLessThanOrEqualToAnchor_constant<R = unknown, P0 = unknown, P1 = number>(_ruleLessThanOrEqualToAnchor: P0, _constant: P1): R;
    ruleGreaterThanOrEqualToAnchor_constant<R = unknown, P0 = unknown, P1 = number>(_ruleGreaterThanOrEqualToAnchor: P0, _constant: P1): R;
    ruleEqualToAnchor_constant<R = unknown, P0 = unknown, P1 = number>(_ruleEqualToAnchor: P0, _constant: P1): R;
    ruleLessThanOrEqualToAnchor<R = unknown, P0 = unknown>(_ruleLessThanOrEqualToAnchor: P0): R;
    ruleGreaterThanOrEqualToAnchor<R = unknown, P0 = unknown>(_ruleGreaterThanOrEqualToAnchor: P0): R;
    ruleEqualToAnchor<R = unknown, P0 = unknown>(_ruleEqualToAnchor: P0): R;
    // + NSLayoutAnchor(MidpointAnchor): 
    _anchorAtMidpointToAnchor<R = unknown, P0 = unknown>(__anchorAtMidpointToAnchor: P0): R;
  }
  namespace NSLayoutAnchor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSLayoutAnchor>(): R;
      new: <R = NSLayoutAnchor>() => R;
      anchorNamed_inItem_symbolicAttribute<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_anchorNamed: P0, _inItem: P1, _symbolicAttribute: P2): R;
      anchorNamed_inItem<R = unknown, P0 = unknown, P1 = unknown>(_anchorNamed: P0, _inItem: P1): R;
      anchorWithName_forReferenceView_symbolicAttribute<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_anchorWithName: P0, _forReferenceView: P1, _symbolicAttribute: P2): R;
      anchorWithName_forReferenceView<R = unknown, P0 = unknown, P1 = unknown>(_anchorWithName: P0, _forReferenceView: P1): R;
      layoutAnchorWithName_forReferenceView<R = unknown, P0 = unknown, P1 = unknown>(_layoutAnchorWithName: P0, _forReferenceView: P1): R;
      anchorWithItem_attribute<R = unknown, P0 = unknown, P1 = number>(_anchorWithItem: P0, _attribute: P1): R;
      layoutAnchorWithItem_attribute<R = unknown, P0 = unknown, P1 = number>(_layoutAnchorWithItem: P0, _attribute: P1): R;
      _anchorForItem_attribute<R = unknown, P0 = unknown, P1 = number>(__anchorForItem: P0, _attribute: P1): R;
  
  }
  }
}

declare const NSLayoutAnchor: cocoa.NSLayoutAnchor.CLASS;
