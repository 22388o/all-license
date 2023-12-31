var data = [
    ['GNU AGPLv3', 'copyleft', '',  'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission'],
    ['GNU GPLv3',  'copyleft', '',  'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission'],
    ['GNU LGPLv3',  'copyleft', '',  'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission'],
    ['Mozilla Public License 2.0',  'copyleft', '',  'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'Same license (file)', 'permission', 'permission', 'permission'], 
    ['Apache License 2.0',  'copyleft', '',  'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission',  'permission', 'permission'],
    ['MIT License',  'copycenter', '',  'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission'],
    ['The Unlicense',  'public', '',  'permission', 'permission', 'permission', 'permission', '', 'permission', 'permission'],
    ['The AnarchyLicense',  'public', '',  '', 'permission use', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'permission', 'must be open', 'dont-t have to be open', 'must be open or dont-t have to be open']
];
    
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'text', title:'name(url)', width:120 },
        { type: 'text', title:'type', width:120 },
        { type: 'text', title:'description', width:120 },
        { type: 'text', title:'commercial use', width:120 },
        { type: 'text', title:'distribution', width:120 },
        { type: 'text', title:'modification', width:120 },
        { type: 'text', title:'private use', width:120 },
        { type: 'text', title:'license and copyright notice', width:120 },
        { type: 'text', title:'network use is distribution', width:120 },
        { type: 'text', title:'same license', width:120 },
        { type: 'text', title:'state changes', width:120 },
        { type: 'text', title:'redistribute', width:120 },
        { type: 'text', title:'deploy', width:120 },
        { type: 'text', title:'download', width:120 },
        { type: 'text', title:'evaluate', width:120 },
        { type: 'text', title:'liability', width:120 },
        { type: 'text', title:'warranty', width:120 },
        { type: 'text', title:'disclose source', width:120 },
        { type: 'text', title:'trademark use', width:120 },
        { type: 'text', title:'clause of the use', width:120 },
        { type: 'text', title:'cannot use contributors name to endors', width:120 },
        { type: 'text', title:'retain', width:120 },
        { type: 'text', title:'reuse', width:120 },
        { type: 'text', title:'rename', width:120 },
        { type: 'text', title:'revise', width:120 },
        { type: 'text', title:'remix', width:120 },
        { type: 'text', title:'re-licensing', width:120 },
        { type: 'text', title:'multi-licensing', width:120 },
        { type: 'text', title:'means open', width:120 }
     ]
});
