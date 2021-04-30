
import {initializeBlock, RecordCard,RecordCardList, useBase, useRecords,useRecordById,useCursor, useWatchable ,useLoadable , Box} from "@airtable/blocks/ui";
import React, { useState } from 'react';

function HelloWorldApp() {
    // YOUR CODE GOES HERE
    return <div>Hello world ...🚀</div>;
}


var contactsLinked;



const RecordCardExample = (linked, id) => {
 
 // if (typeof id == 'string') {
	  
//	  return <p> {id} </p>
 // }
  
     const base = useBase();
  
  
  
     const tableCustomers = base.getTableByName("Customers");
     const tableContacts = base.getTableByName("Contacts");
     const fieldRP = tableCustomers.getFieldByName('Contacts');
  
  
     const fieldPosition = tableContacts.getFieldByName('Position');
     const fieldResponsibleperson = tableContacts.getFieldByName('Responsible person');
  
   
     const [selectedRecordId, setSelectedRecordId] = useState(null);

     const cursor = useCursor();

     useWatchable(cursor, ['selectedRecordIds'], () => {
        if (cursor.selectedRecordIds.length > 0) {
            setSelectedRecordId(cursor.selectedRecordIds[0]);
        }  else  { setSelectedRecordId('recSlhi5qVG6mNLdQ')  }
     });

     const selectedRecord = useRecordById(tableCustomers, selectedRecordId ? selectedRecordId : 'recSlhi5qVG6mNLdQ');
    
	 const s =  useRecordById(tableCustomers,  'recSlhi5qVG6mNLdQ');
	
     const linkedRecords = useRecords(selectedRecord.selectLinkedRecordsFromCell(fieldRP))
  
     console.log('selected')
     console.log(s)
     console.log('linked')
     console.log(linkedRecords[0])
	  
 
     return (<Box     border="default"     backgroundColor="white"     padding={0}       height={200}      >

	              <RecordCardList records={linkedRecords} fields={[fieldPosition,fieldResponsibleperson]}  />  
             </Box> )
 
	 //return <p> </p>
 
};




initializeBlock(() => <RecordCardExample />);
