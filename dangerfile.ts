import { message, danger } from 'danger';
import path from 'path';
import { dangerReassure } from 'reassure';

dangerReassure({
  inputFilePath: path.join(__dirname, '.reassure/output.md'),
});

const modifiedMD = danger.git.modified_files.join('- ');
message(`Changed Files in this PR: \n - ${modifiedMD}`);
