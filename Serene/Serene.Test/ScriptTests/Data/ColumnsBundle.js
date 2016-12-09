﻿Q.ScriptData.set('Columns.Meeting.MeetingAgendaRelevant', [{"name":"AgendaRelevantId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"AgendaId","title":"Db.Meeting.MeetingAgendaRelevant.AgendaId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"ContactId","title":"Db.Meeting.MeetingAgendaRelevant.ContactId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"}]);



Q.ScriptData.set('Columns.Meeting.MeetingAgenda', [{"name":"AgendaId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"MeetingId","title":"Db.Meeting.MeetingAgenda.MeetingId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"AgendaNumber","title":"Db.Meeting.MeetingAgenda.AgendaNumber","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"Title","title":"Db.Meeting.MeetingAgenda.Title","editorParams":{"maxLength":2000},"maxLength":2000,"width":150,"editLink":true},{"name":"Description","title":"Db.Meeting.MeetingAgenda.Description","width":250},{"name":"AgendaTypeId","title":"Db.Meeting.MeetingAgenda.AgendaTypeId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"RequestedByContactId","title":"Db.Meeting.MeetingAgenda.RequestedByContactId","editorType":"Integer","formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"Images","title":"Db.Meeting.MeetingAgenda.Images","width":250},{"name":"Attachments","title":"Db.Meeting.MeetingAgenda.Attachments","width":250}]);



Q.ScriptData.set('Columns.Meeting.MeetingAgendaType', [{"name":"AgendaTypeId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"Name","title":"Db.Meeting.MeetingAgendaType.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350,"editLink":true}]);



Q.ScriptData.set('Columns.Meeting.MeetingAttendee', [{"name":"AttendeeId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"MeetingId","title":"Db.Meeting.MeetingAttendee.MeetingId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"ContactId","title":"Db.Meeting.MeetingAttendee.ContactId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"AttendeeType","title":"Db.Meeting.MeetingAttendee.AttendeeType","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"AttendanceStatus","title":"Db.Meeting.MeetingAttendee.AttendanceStatus","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"}]);



Q.ScriptData.set('Columns.Meeting.MeetingDecisionRelevant', [{"name":"DecisionRelevantId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"DecisionId","title":"Db.Meeting.MeetingDecisionRelevant.DecisionId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"ContactId","title":"Db.Meeting.MeetingDecisionRelevant.ContactId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"}]);



Q.ScriptData.set('Columns.Meeting.MeetingDecision', [{"name":"DecisionId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"MeetingId","title":"Db.Meeting.MeetingDecision.MeetingId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"AgendaId","title":"Db.Meeting.MeetingDecision.AgendaId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"Description","title":"Db.Meeting.MeetingDecision.Description","width":250,"editLink":true},{"name":"DecisionNumber","title":"Db.Meeting.MeetingDecision.DecisionNumber","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"ResponsibleContactId","title":"Db.Meeting.MeetingDecision.ResponsibleContactId","editorType":"Integer","formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"DueDate","title":"Db.Meeting.MeetingDecision.DueDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"ResolutionStatus","title":"Db.Meeting.MeetingDecision.ResolutionStatus","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer"},{"name":"Images","title":"Db.Meeting.MeetingDecision.Images","width":250},{"name":"Attachments","title":"Db.Meeting.MeetingDecision.Attachments","width":250}]);



Q.ScriptData.set('Columns.Meeting.MeetingLocation', [{"name":"LocationId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"Name","title":"Db.Meeting.MeetingLocation.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350,"editLink":true},{"name":"Address","title":"Db.Meeting.MeetingLocation.Address","editorParams":{"maxLength":300},"maxLength":300,"width":150},{"name":"Latitude","title":"Db.Meeting.MeetingLocation.Latitude","editorType":"Decimal","required":true,"formatterType":"Number","width":85,"filteringType":"Decimal"},{"name":"Longitude","title":"Db.Meeting.MeetingLocation.Longitude","editorType":"Decimal","required":true,"formatterType":"Number","width":85,"filteringType":"Decimal"}]);



Q.ScriptData.set('Columns.Meeting.Meeting', [{"name":"MeetingId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"MeetingName","title":"Db.Meeting.Meeting.MeetingName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150,"editLink":true},{"name":"MeetingNumber","title":"Db.Meeting.Meeting.MeetingNumber","editorParams":{"maxLength":20},"maxLength":20,"width":150},{"name":"MeetingTypeName","title":"Db.Meeting.Meeting.MeetingTypeName","width":250,"filteringType":"Lookup","filteringParams":{"idField":"MeetingTypeId","lookupKey":"Meeting.MeetingType"},"filteringIdField":"MeetingTypeId"},{"name":"StartDate","title":"Db.Meeting.Meeting.StartDate","editorType":"DateTime","required":true,"formatterType":"DateTime","width":85,"filteringType":"DateTime"},{"name":"EndDate","title":"Db.Meeting.Meeting.EndDate","editorType":"DateTime","required":true,"formatterType":"DateTime","width":85,"filteringType":"DateTime"},{"name":"LocationName","title":"Db.Meeting.Meeting.LocationName","width":250,"filteringType":"Lookup","filteringParams":{"idField":"LocationId","lookupKey":"Meeting.MeetingLocation"},"filteringIdField":"LocationId"},{"name":"UnitName","title":"Db.Meeting.Meeting.UnitName","width":250,"filteringType":"Editor","filteringParams":{"idField":"UnitId","editorType":"Serene.Organization.BusinessUnitEditor","useLike":true},"filteringIdField":"UnitId"},{"name":"OrganizerContactFullName","title":"Db.Meeting.Meeting.OrganizerContactFullName","width":250,"filteringType":"Lookup","filteringParams":{"idField":"OrganizerContactId","lookupKey":"Organization.Contact"},"filteringIdField":"OrganizerContactId"},{"name":"ReporterContactFullName","title":"Db.Meeting.Meeting.ReporterContactFullName","width":250,"filteringType":"Lookup","filteringParams":{"idField":"ReporterContactId","lookupKey":"Organization.Contact"},"filteringIdField":"ReporterContactId"}]);



Q.ScriptData.set('Columns.Meeting.MeetingType', [{"name":"MeetingTypeId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"Name","title":"Db.Meeting.MeetingType.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350,"editLink":true}]);



Q.ScriptData.set('Columns.Organization.Contact', [{"name":"ContactId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"Title","title":"Db.Organization.Contact.Title","editorParams":{"maxLength":30},"maxLength":30,"width":150,"editLink":true},{"name":"FirstName","title":"Db.Organization.Contact.FirstName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"editLink":true},{"name":"LastName","title":"Db.Organization.Contact.LastName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"editLink":true},{"name":"Email","title":"Db.Organization.Contact.Email","editorType":"Email","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Email","useLike":true}},{"name":"IdentityNo","title":"Db.Organization.Contact.IdentityNo","editorParams":{"maxLength":20},"maxLength":20,"width":150},{"name":"UserDisplayName","title":"Db.Organization.Contact.UserDisplayName","width":250}]);



Q.ScriptData.set('Columns.Organization.BusinessUnit', [{"name":"UnitId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"Name","title":"Db.Organization.BusinessUnit.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":300,"editLink":true},{"name":"ParentUnitName","title":"Db.Organization.BusinessUnit.ParentUnitName","editorType":"Integer","formatterType":"Number","width":300,"editLink":true,"filteringType":"Editor","filteringParams":{"idField":"ParentUnitId","editorType":"Serene.Organization.BusinessUnitEditor","useLike":false},"filteringIdField":"ParentUnitId"}]);



Q.ScriptData.set('Columns.Northwind.Customer', [{"name":"CustomerID","title":"Db.Shared.RecordId","editorParams":{"maxLength":5},"maxLength":5,"required":true,"updatable":false,"width":100,"editLink":true},{"name":"CompanyName","title":"Db.Northwind.Customer.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250,"editLink":true},{"name":"ContactName","title":"Db.Northwind.Customer.ContactName","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"ContactTitle","title":"Db.Northwind.Customer.ContactTitle","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"Region","title":"Db.Northwind.Customer.Region","editorParams":{"maxLength":15},"maxLength":15,"width":60},{"name":"PostalCode","title":"Db.Northwind.Customer.PostalCode","editorParams":{"maxLength":10},"maxLength":10,"width":100},{"name":"Country","title":"Db.Northwind.Customer.Country","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.CustomerCountry","maxLength":15},"maxLength":15,"width":130,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.CustomerCountry"},"quickFilter":true},{"name":"City","title":"Db.Northwind.Customer.City","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.CustomerCity","maxLength":15},"maxLength":15,"width":120,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.CustomerCity"},"quickFilter":true,"quickFilterParams":{"cascadeFrom":"Country"}},{"name":"Phone","title":"Db.Northwind.Customer.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":120},{"name":"Fax","title":"Db.Northwind.Customer.Fax","editorParams":{"maxLength":24},"maxLength":24,"width":120},{"name":"Representatives","title":"Representatives","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Employee","multiple":true},"formatterType":"Serene.Northwind.EmployeeListFormatter","width":250,"sortable":false,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Employee"},"notFilterable":true,"quickFilter":true}]);



Q.ScriptData.set('Columns.Northwind.Order', [{"name":"OrderID","title":"Db.Northwind.Order.OrderID","required":true,"insertable":false,"updatable":false,"alignment":"right","width":70,"sortOrder":-1,"editLink":true},{"name":"CustomerCompanyName","title":"Db.Northwind.Order.CustomerCompanyName","width":200,"editLink":true,"filteringType":"Editor","filteringParams":{"idField":"CustomerID","editorType":"Serene.Northwind.CustomerEditor","useLike":true},"filteringIdField":"CustomerID","quickFilter":true},{"name":"OrderDate","title":"Db.Northwind.Order.OrderDate","editorType":"Date","required":true,"formatterType":"Date","width":85,"editLink":true,"filteringType":"Date","quickFilter":true},{"name":"EmployeeFullName","title":"Db.Northwind.Order.EmployeeFullName","formatterType":"Serene.Northwind.EmployeeFormatter","formatterParams":{"genderProperty":"EmployeeGender"},"width":140,"filteringType":"Lookup","filteringParams":{"idField":"EmployeeID","lookupKey":"Northwind.Employee"},"filteringIdField":"EmployeeID","quickFilter":true},{"name":"RequiredDate","title":"Db.Northwind.Order.RequiredDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"ShippingState","title":"Db.Northwind.Order.ShippingState","editorType":"Enum","editorParams":{"enumKey":"Northwind.OrderShippingState"},"formatterType":"Enum","formatterParams":{"enumKey":"Northwind.OrderShippingState"},"width":65,"filteringType":"Enum","filteringParams":{"enumKey":"Northwind.OrderShippingState"},"filterOnly":true,"quickFilter":true},{"name":"ShippedDate","title":"Db.Northwind.Order.ShippedDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"ShipViaCompanyName","title":"Db.Northwind.Order.ShipViaCompanyName","formatterType":"Serene.Northwind.ShipperFormatter","width":140,"filteringType":"Lookup","filteringParams":{"idField":"ShipVia","lookupKey":"Northwind.Shipper"},"filteringIdField":"ShipVia","quickFilter":true,"quickFilterParams":{"multiple":true}},{"name":"ShipCountry","title":"Db.Northwind.Order.ShipCountry","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.OrderShipCountry","maxLength":15},"maxLength":15,"width":100,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.OrderShipCountry"},"quickFilter":true},{"name":"ShipCity","title":"Db.Northwind.Order.ShipCity","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.OrderShipCity","maxLength":15},"maxLength":15,"width":100,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.OrderShipCity"},"quickFilter":true,"quickFilterParams":{"cascadeFrom":"ShipCountry"}},{"name":"Freight","title":"Db.Northwind.Order.Freight","editorType":"Decimal","formatterType":"Serene.Northwind.FreightFormatter","formatterParams":{"displayFormat":"#,##0.####"},"displayFormat":"#,##0.####","alignment":"right","width":85,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.####"}}]);



Q.ScriptData.set('Columns.Northwind.Product', [{"name":"ProductID","title":"Db.Shared.RecordId","required":true,"insertable":false,"updatable":false,"localizable":true,"alignment":"right","width":65,"editLink":true},{"name":"ProductName","title":"Db.Northwind.Product.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"localizable":true,"width":250,"editLink":true},{"name":"Discontinued","title":"Db.Northwind.Product.Discontinued","editorType":"Boolean","required":true,"formatterType":"Checkbox","width":40,"filteringType":"Boolean","quickFilter":true},{"name":"SupplierCompanyName","title":"Db.Northwind.Product.SupplierCompanyName","width":250,"editLink":true,"editLinkItemType":"Northwind.Supplier","editLinkIdField":"SupplierID","filteringType":"Lookup","filteringParams":{"idField":"SupplierID","lookupKey":"Northwind.Supplier"},"filteringIdField":"SupplierID","quickFilter":true},{"name":"CategoryName","title":"Db.Northwind.Product.CategoryName","width":150,"editLink":true,"editLinkItemType":"Northwind.Category","editLinkIdField":"CategoryID","filteringType":"Lookup","filteringParams":{"idField":"CategoryID","lookupKey":"Northwind.Category"},"filteringIdField":"CategoryID","quickFilter":true,"quickFilterParams":{"multiple":true}},{"name":"QuantityPerUnit","title":"Db.Northwind.Product.QuantityPerUnit","editorParams":{"maxLength":20},"maxLength":20,"width":130},{"name":"UnitPrice","title":"Db.Northwind.Product.UnitPrice","editorType":"Decimal","formatterType":"Number","alignment":"right","width":80,"filteringType":"Decimal"},{"name":"UnitsInStock","title":"Db.Northwind.Product.UnitsInStock","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer"},{"name":"UnitsOnOrder","title":"Db.Northwind.Product.UnitsOnOrder","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer"},{"name":"ReorderLevel","title":"Db.Northwind.Product.ReorderLevel","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer"}]);



Q.ScriptData.set('Columns.Northwind.SalesByCategory', [{"name":"CategoryName","title":"Db.Northwind.SalesByCategory.CategoryName","editorParams":{"maxLength":15},"maxLength":15,"required":true,"width":150,"sortOrder":1},{"name":"ProductName","title":"Db.Northwind.SalesByCategory.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250},{"name":"ProductSales","title":"Db.Northwind.SalesByCategory.ProductSales","editorType":"Decimal","editorParams":{"minValue":"000000000000000.0000","maxValue":"999999999999999.9999"},"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":150,"sortOrder":-2,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}}]);



Q.ScriptData.set('Columns.Northwind.Category', [{"name":"CategoryID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"localizable":true,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"CategoryName","title":"Db.Northwind.Category.CategoryName","editorParams":{"maxLength":15},"maxLength":15,"required":true,"localizable":true,"width":250,"editLink":true},{"name":"Description","title":"Db.Northwind.Category.Description","localizable":true,"width":450}]);



Q.ScriptData.set('Columns.Northwind.OrderDetail', [{"name":"ProductName","title":"Db.Northwind.OrderDetail.ProductName","width":200,"editLink":true,"filteringType":"Lookup","filteringParams":{"idField":"ProductID","lookupKey":"Northwind.Product"},"filteringIdField":"ProductID"},{"name":"UnitPrice","title":"Db.Northwind.OrderDetail.UnitPrice","editorType":"Decimal","required":true,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}},{"name":"Quantity","title":"Db.Northwind.OrderDetail.Quantity","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":1,"alignment":"right","width":100,"filteringType":"Integer"},{"name":"Discount","title":"Db.Northwind.OrderDetail.Discount","editorType":"Decimal","required":true,"defaultValue":0,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}},{"name":"LineTotal","title":"Db.Northwind.OrderDetail.LineTotal","editorType":"Decimal","formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}}]);



Q.ScriptData.set('Columns.Northwind.Region', [{"name":"RegionID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"RegionDescription","title":"Db.Northwind.Region.RegionDescription","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":300,"editLink":true}]);



Q.ScriptData.set('Columns.Northwind.Shipper', [{"name":"ShipperID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"CompanyName","title":"Db.Northwind.Shipper.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":300,"editLink":true},{"name":"Phone","title":"Db.Northwind.Shipper.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":150}]);



Q.ScriptData.set('Columns.Northwind.Supplier', [{"name":"SupplierID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"CompanyName","title":"Db.Northwind.Supplier.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250,"editLink":true},{"name":"ContactName","title":"Db.Northwind.Supplier.ContactName","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"ContactTitle","title":"Db.Northwind.Supplier.ContactTitle","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"Phone","title":"Db.Northwind.Supplier.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":120},{"name":"Region","title":"Db.Northwind.Supplier.Region","editorParams":{"maxLength":15},"maxLength":15,"width":80},{"name":"Country","title":"Db.Northwind.Supplier.Country","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.SupplierCountry","maxLength":15},"maxLength":15,"width":130,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.SupplierCountry"},"quickFilter":true},{"name":"City","title":"Db.Northwind.Supplier.City","editorParams":{"maxLength":15},"maxLength":15,"width":130}]);



Q.ScriptData.set('Columns.Northwind.Territory', [{"name":"TerritoryID","title":"Db.Shared.RecordId","editorType":"Integer","editorParams":{"maxLength":20},"maxLength":20,"required":true,"updatable":false,"formatterType":"Number","width":100,"editLink":true,"filteringType":"Integer"},{"name":"TerritoryDescription","title":"Db.Northwind.Territory.TerritoryDescription","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":200,"editLink":true},{"name":"RegionDescription","title":"Db.Northwind.Territory.RegionDescription","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Region"},"width":150,"editLink":true,"editLinkItemType":"Northwind.Region","editLinkIdField":"RegionID","filteringType":"Lookup","filteringParams":{"idField":"RegionID","lookupKey":"Northwind.Region"},"filteringIdField":"RegionID","quickFilter":true}]);



Q.ScriptData.set('Columns.BasicSamples.InlineImageInGrid', [{"name":"ProductID","title":"Db.Shared.RecordId","required":true,"insertable":false,"updatable":false,"localizable":true,"alignment":"right","width":65,"editLink":true},{"name":"ProductName","title":"Db.Northwind.Product.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"localizable":true,"width":250,"editLink":true},{"name":"ProductImage","title":"Db.Northwind.Product.ProductImage","editorType":"ImageUpload","editorParams":{"maxLength":100},"maxLength":100,"formatterType":"Serene.BasicSamples.InlineImageFormatter","width":450,"filteringType":"Editor","filteringParams":{"editorType":"ImageUpload","useLike":true}},{"name":"ProductThumbnail","title":"ProductThumbnail","formatterType":"Serene.BasicSamples.InlineImageFormatter","formatterParams":{"fileProperty":"ProductImage","thumb":true},"width":450}]);



Q.ScriptData.set('Columns.BasicSamples.CustomerGrossSales', [{"name":"ContactName","title":"Db.BasicSamples.GrossSales.ContactName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":150,"sortOrder":1},{"name":"ProductName","title":"Db.BasicSamples.GrossSales.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250},{"name":"GrossAmount","title":"Db.BasicSamples.GrossSales.GrossAmount","editorType":"Decimal","editorParams":{"minValue":"00000000000000000.00","maxValue":"99999999999999999.99"},"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":150,"sortOrder":-2,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}}]);



Q.ScriptData.set('Columns.BasicSamples.VSGalleryQA', [{"name":"ThreadId","title":"Thread ID","editorType":"Integer","formatterType":"Number","alignment":"right","width":70,"sortable":false,"filteringType":"Integer"},{"name":"Title","title":"Title","cssClass":"wrap-text","width":200,"sortable":false},{"name":"Posts","title":"Posts","width":800,"sortable":false},{"name":"StartedByName","title":"Started By","editorType":"Date","formatterType":"Date","width":150,"sortable":false,"filteringType":"Date"},{"name":"StartedOn","title":"Started On","editorType":"Date","formatterType":"Date","formatterParams":{"displayFormat":"dd/MM/yyyy HH:mm"},"displayFormat":"dd/MM/yyyy HH:mm","width":120,"sortable":false,"filteringType":"Date","filteringParams":{"displayFormat":"dd/MM/yyyy HH:mm"}},{"name":"LastPostOn","title":"Last Post On","editorType":"Date","formatterType":"Date","formatterParams":{"displayFormat":"dd/MM/yyyy HH:mm"},"displayFormat":"dd/MM/yyyy HH:mm","width":120,"sortable":false,"filteringType":"Date","filteringParams":{"displayFormat":"dd/MM/yyyy HH:mm"}}]);



Q.ScriptData.set('Columns.BasicSamples.DragDropSample', [{"name":"Title","title":"Db.BasicSamples.DragDropSample.Title","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":300,"editLink":true}]);



Q.ScriptData.set('Columns.Administration.Language', [{"name":"LanguageId","title":"Db.Administration.Language.LanguageId","editorParams":{"maxLength":10},"maxLength":10,"required":true,"width":150,"editLink":true},{"name":"LanguageName","title":"Db.Administration.Language.LanguageName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"editLink":true}]);



Q.ScriptData.set('Columns.Administration.Role', [{"name":"RoleId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"RoleName","title":"Db.Administration.Role.RoleName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":300,"editLink":true}]);



Q.ScriptData.set('Columns.Administration.User', [{"name":"UserId","title":"Db.Administration.User.UserId","required":true,"insertable":false,"updatable":false,"alignment":"right","width":55,"editLink":true},{"name":"Username","title":"Db.Administration.User.Username","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150,"editLink":true},{"name":"DisplayName","title":"Db.Administration.User.DisplayName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150},{"name":"Email","title":"Db.Administration.User.Email","editorParams":{"maxLength":100},"maxLength":100,"width":250},{"name":"Source","title":"Db.Administration.User.Source","editorParams":{"maxLength":4},"maxLength":4,"required":true,"insertable":false,"updatable":false,"defaultValue":"site","width":100}]);




