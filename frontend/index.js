
import {initializeBlock, RecordCard,RecordCardList, useBase, useRecords,useRecordById,useCursor, useWatchable ,useLoadable , Box} from "@airtable/blocks/ui";
import React, { useState } from 'react';





const RecordCardExample = (linked, id) => {
 

     // setting up models
  
     const base = useBase();
     const tableCustomers = base.getTableByName("Customers");
     const tableContacts = base.getTableByName("Contacts");
     const fieldRP = tableCustomers.getFieldByName('Contacts');
  
     //setting up fields
	 
     const fieldPosition = tableContacts.getFieldByName('Position');
     const fieldResponsibleperson = tableContacts.getFieldByName('Responsible person');
  
     //setting up state variables 
	 
     const [selectedRecordId, setSelectedRecordId] = useState(null);

     //setting up cursor 

     const cursor = useCursor();
     useWatchable(cursor, ['selectedRecordIds'], () => {
        if (cursor.selectedRecordIds.length > 0) {
            setSelectedRecordId(cursor.selectedRecordIds[0]);
        }
     });
	 
	 //setting up selected and linked record as hooks

     const selectedRecord = useRecordById(tableCustomers, selectedRecordId ? selectedRecordId : 'recSlhi5qVG6mNLdQ');
     const linkedRecords = useRecords(selectedRecord.selectLinkedRecordsFromCell(fieldRP))
  
     console.log('selected')
     console.log(s)
     console.log('linked')
     console.log(linkedRecords[0])
	 
	 // render
	  
     return (<Box     border="default"     backgroundColor="white"     padding={0}       height={200}      >

	              <RecordCardList records={linkedRecords} fields={[fieldPosition,fieldResponsibleperson]}  />  
             </Box> )
 
	 
};




initializeBlock(() => <RecordCardExample />);
