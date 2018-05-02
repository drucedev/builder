export default [{
  "name": "ru.sbrf.bh.banking.product.pcredit.request.fg.SbrfPersonalCreditRequestFactoryFgService#0",
  "methods": [{
    "name": "changeStatus",
    "response": {
      "success": {"example": [["void", {}]], "description": {"className": "void", "properties": []}},
      "exceptions": ["ru.sbrf.ufs.platform.core.exception.PlatformException", "java.util.concurrent.TimeoutException"]
    },
    "requestParameters": [{
      "example": [["ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor", {
        "request": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
          "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
            "branchId": "abc",
            "code": "abc",
            "agencyId": "abc",
            "regionId": "abc"
          }],
          "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
          "serviceStartDate": ["java.util.Date", 0],
          "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
            "exceptions": ["java.util.List", [null]],
            "messages": ["java.util.List", ["abc"]]
          }],
          "requestClassName": "abc",
          "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
            "autoGrantion": false,
            "offerSignDate": ["java.util.GregorianCalendar", 0],
            "offerSigned": false,
            "alternativeId": "abc",
            "rightTransferDeny": false,
            "withInsurance": false,
            "printFormat": "abc",
            "dayOfPayment": 0,
            "offer2": false,
            "offerAmount": ["java.math.BigDecimal", 0.0],
            "fullLoanCost": ["java.math.BigDecimal", 0.0],
            "issueResourceType": "EXIST_CARD",
            "offerRate": ["java.math.BigDecimal", 0.0],
            "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
              "templateType": "INDIVIDUAL_LOAN_TERMS",
              "signDate": ["java.util.GregorianCalendar", 0],
              "version": "abc"
            }]]],
            "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
              "baseAmount": ["java.math.BigDecimal", 0.0],
              "insuranceSource": "CREDIT",
              "businessProcessId": "abc",
              "signDate": ["java.util.GregorianCalendar", 0],
              "autopayment": false,
              "tax": ["java.math.BigDecimal", 0.0],
              "productCode": "abc",
              "term": 0,
              "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                "inn": "abc",
                "orgCode": "abc",
                "name": "abc",
                "employeeCount": "LESS_10",
                "sectorDescription": "abc",
                "sectorCode": "abc"
              }],
              "policySeries": "abc",
              "policyNumber": "abc",
              "premiumAmount": ["java.math.BigDecimal", 0.0],
              "currency": "abc"
            }],
            "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
              "directDebit": false,
              "accountNumber": "abc",
              "priority": 0,
              "name": "abc",
              "resourceType": "ACCOUNT",
              "cardNumber": "abc"
            }],
            "offerRepeat": false,
            "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
              "amount": ["java.math.BigDecimal", 0.0],
              "rate": ["java.math.BigDecimal", 0.0],
              "alternativeId": "abc",
              "term": 0,
              "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                "monthPayment": ["java.math.BigDecimal", 0.0],
                "title": "abc",
                "alternativeId": "abc",
                "description": "abc",
                "hint": "abc"
              }]]],
              "creditCardLimit": ["java.math.BigDecimal", 0.0],
              "annuityPayment": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0]
            }]]],
            "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
              "accepted": false,
              "operationNumber": "abc",
              "acceptDateTime": ["java.util.GregorianCalendar", 0],
              "confirmCode": "abc",
              "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                "countryPrefix": "abc",
                "fullNumber": "abc",
                "phoneType": "MOBILE",
                "additional": null,
                "prefix": "abc",
                "number": "abc"
              }]]]
            }],
            "insuranceId": "abc",
            "annuityPayment": ["java.math.BigDecimal", 0.0]
          }],
          "processingType": "NEW",
          "amount": ["java.math.BigDecimal", 0.0],
          "requests": ["java.util.List", [null]],
          "rate": ["java.math.BigDecimal", 0.0],
          "resolveDate": ["java.util.GregorianCalendar", 0],
          "complete": false,
          "parties": ["java.util.List", [null]],
          "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
          "resolvedDate": ["java.util.Date", 0],
          "createDate": ["java.util.GregorianCalendar", 0],
          "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
            "outerPaymentType": "CRED",
            "crmLeadId": "abc",
            "changeUrl": "abc",
            "successUrl": "abc",
            "iposRequestId": "abc"
          }],
          "createdDate": ["java.util.Date", 0],
          "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
            "message": "abc",
            "sendDate": ["java.util.GregorianCalendar", 0],
            "statusDescription": "abc",
            "requestId": "abc",
            "status": 0,
            "declineCode": "abc",
            "eventCode": 0,
            "errorCode": 0,
            "errorDescription": "abc",
            "declineReason": "abc",
            "rqUid": "abc"
          }],
          "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
          "requestStatus": "REFUSED",
          "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
          "requestId": "abc",
          "status": 0,
          "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
          "requestType": "SHORT",
          "requestCategory": "EMPLOYEE",
          "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
            "result": "DENY",
            "operation": "CREATE",
            "checkDate": ["java.util.GregorianCalendar", 0]
          }]]],
          "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
            "changeDate": ["java.util.GregorianCalendar", 0],
            "status": "REFUSED"
          }]]],
          "updateDate": ["java.util.GregorianCalendar", 0],
          "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
            "productGroup": "abc",
            "subProductName": "abc",
            "productCode": "abc",
            "paymentType": "ANNUITY",
            "refinancing": false,
            "rateTo": ["java.math.BigDecimal", 0.0],
            "subProductCode": "abc",
            "productName": "abc",
            "rateFrom": ["java.math.BigDecimal", 0.0],
            "currency": "abc",
            "productType": "abc"
          }],
          "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
          "term": 0,
          "guarantorChangeCounter": 0,
          "processingSystem": "UFS",
          "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
        }], "auditParam": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
      }]],
      "description": {
        "className": "ru.sbrf.bh.banking.product.pcredit.request.acceptor.RequestAcceptor",
        "properties": [{
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest",
          "name": "request",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditRequest", {
            "department": ["ru.sbrf.bh.banking.product.pcredit.request.vo.Department", {
              "branchId": "abc",
              "code": "abc",
              "agencyId": "abc",
              "regionId": "abc"
            }],
            "events": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestEvent", {"eventId": "abc"}]]],
            "serviceStartDate": ["java.util.Date", 0],
            "state": ["ru.sbrf.uam.services.status.RequestChannelState", {
              "exceptions": ["java.util.List", [null]],
              "messages": ["java.util.List", ["abc"]]
            }],
            "requestClassName": "abc",
            "issueInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.IssueInfo", {
              "autoGrantion": false,
              "offerSignDate": ["java.util.GregorianCalendar", 0],
              "offerSigned": false,
              "alternativeId": "abc",
              "rightTransferDeny": false,
              "withInsurance": false,
              "printFormat": "abc",
              "dayOfPayment": 0,
              "offer2": false,
              "offerAmount": ["java.math.BigDecimal", 0.0],
              "fullLoanCost": ["java.math.BigDecimal", 0.0],
              "issueResourceType": "EXIST_CARD",
              "offerRate": ["java.math.BigDecimal", 0.0],
              "printTemplates": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.PrintTemplatesVersion", {
                "templateType": "INDIVIDUAL_LOAN_TERMS",
                "signDate": ["java.util.GregorianCalendar", 0],
                "version": "abc"
              }]]],
              "insuranceInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceInfo", {
                "baseAmount": ["java.math.BigDecimal", 0.0],
                "insuranceSource": "CREDIT",
                "businessProcessId": "abc",
                "signDate": ["java.util.GregorianCalendar", 0],
                "autopayment": false,
                "tax": ["java.math.BigDecimal", 0.0],
                "productCode": "abc",
                "term": 0,
                "company": ["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Organization", {
                  "inn": "abc",
                  "orgCode": "abc",
                  "name": "abc",
                  "employeeCount": "LESS_10",
                  "sectorDescription": "abc",
                  "sectorCode": "abc"
                }],
                "policySeries": "abc",
                "policyNumber": "abc",
                "premiumAmount": ["java.math.BigDecimal", 0.0],
                "currency": "abc"
              }],
              "issueResource": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalResource", {
                "directDebit": false,
                "accountNumber": "abc",
                "priority": 0,
                "name": "abc",
                "resourceType": "ACCOUNT",
                "cardNumber": "abc"
              }],
              "offerRepeat": false,
              "offerAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.OfferAlternative", {
                "amount": ["java.math.BigDecimal", 0.0],
                "rate": ["java.math.BigDecimal", 0.0],
                "alternativeId": "abc",
                "term": 0,
                "insuranceAlternatives": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.InsuranceAlternative", {
                  "monthPayment": ["java.math.BigDecimal", 0.0],
                  "title": "abc",
                  "alternativeId": "abc",
                  "description": "abc",
                  "hint": "abc"
                }]]],
                "creditCardLimit": ["java.math.BigDecimal", 0.0],
                "annuityPayment": ["java.math.BigDecimal", 0.0],
                "fullLoanCost": ["java.math.BigDecimal", 0.0]
              }]]],
              "acceptInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AcceptInfo", {
                "accepted": false,
                "operationNumber": "abc",
                "acceptDateTime": ["java.util.GregorianCalendar", 0],
                "confirmCode": "abc",
                "phones": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.party.Phone", {
                  "countryPrefix": "abc",
                  "fullNumber": "abc",
                  "phoneType": "MOBILE",
                  "additional": null,
                  "prefix": "abc",
                  "number": "abc"
                }]]]
              }],
              "insuranceId": "abc",
              "annuityPayment": ["java.math.BigDecimal", 0.0]
            }],
            "processingType": "NEW",
            "amount": ["java.math.BigDecimal", 0.0],
            "requests": ["java.util.List", [null]],
            "rate": ["java.math.BigDecimal", 0.0],
            "resolveDate": ["java.util.GregorianCalendar", 0],
            "complete": false,
            "parties": ["java.util.List", [null]],
            "agreements": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAgreement", {"agreementId": "abc"}]]],
            "resolvedDate": ["java.util.Date", 0],
            "createDate": ["java.util.GregorianCalendar", 0],
            "sourceSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.SourceSystemInfo", {
              "outerPaymentType": "CRED",
              "crmLeadId": "abc",
              "changeUrl": "abc",
              "successUrl": "abc",
              "iposRequestId": "abc"
            }],
            "createdDate": ["java.util.Date", 0],
            "masterSystemInfo": ["ru.sbrf.bh.banking.product.pcredit.request.vo.MasterSystemInfo", {
              "message": "abc",
              "sendDate": ["java.util.GregorianCalendar", 0],
              "statusDescription": "abc",
              "requestId": "abc",
              "status": 0,
              "declineCode": "abc",
              "eventCode": 0,
              "errorCode": 0,
              "errorDescription": "abc",
              "declineReason": "abc",
              "rqUid": "abc"
            }],
            "files": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestFile", {}]]],
            "requestStatus": "REFUSED",
            "accounts": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAccount", {"accountId": "abc"}]]],
            "requestId": "abc",
            "status": 0,
            "channels": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestChannel", {"channelId": "abc"}]]],
            "requestType": "SHORT",
            "requestCategory": "EMPLOYEE",
            "frodResult": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.FrodCheck", {
              "result": "DENY",
              "operation": "CREATE",
              "checkDate": ["java.util.GregorianCalendar", 0]
            }]]],
            "statusHistory": ["java.util.List", [["ru.sbrf.bh.banking.product.pcredit.request.vo.StatusHistory", {
              "changeDate": ["java.util.GregorianCalendar", 0],
              "status": "REFUSED"
            }]]],
            "updateDate": ["java.util.GregorianCalendar", 0],
            "product": ["ru.sbrf.bh.banking.product.pcredit.request.vo.PersonalCreditProduct", {
              "productGroup": "abc",
              "subProductName": "abc",
              "productCode": "abc",
              "paymentType": "ANNUITY",
              "refinancing": false,
              "rateTo": ["java.math.BigDecimal", 0.0],
              "subProductCode": "abc",
              "productName": "abc",
              "rateFrom": ["java.math.BigDecimal", 0.0],
              "currency": "abc",
              "productType": "abc"
            }],
            "assets": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAsset", {"assetId": "abc"}]]],
            "term": 0,
            "guarantorChangeCounter": 0,
            "processingSystem": "UFS",
            "actions": ["java.util.List", [["ru.sbrf.uam.services.vo.request.RequestAction", {"actionId": "abc"}]]]
          }]
        }, {
          "type": "object",
          "className": "ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam",
          "name": "auditParam",
          "value": ["ru.sbrf.bh.banking.product.pcredit.request.vo.AuditParam", {"auditContextUUID": "abc"}]
        }]
      }
    }]
  }]
}]
