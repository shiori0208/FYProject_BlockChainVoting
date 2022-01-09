import { Context, logging, PersistentMap } from 'near-sdk-as'

const CandidateURL = new PersistentMap<string, string>("CandidateURL");
const CandidatePair = new PersistentMap<string, string[]>("CandidatePair");
const PromptArray = new PersistentMap<string, string[]>("Array of Prompts");
const voteArray = new PersistentMap<string, i32[]>("Stores Votes");
const userParticipation = new PersistentMap<string, string[]>("User Participation Record");


// View Methods

export function getUrl(name: string): string{
  if(CandidateURL.contains(name)) {
    return CandidateURL.getSome(name);
  } else {
    logging.log(`Can't find that user`);
    return ''
  }
}

export function didParticipate(prompt: string, user: string): bool{
  if(userParticipation.contains(prompt)) {
    let getArray = userParticipation.getSome(prompt);
    return getArray.includes(user);
  } else {
    logging.log('Prompt not found');
    return false;
  }
}

export function getAllPrompt(): string[]{
  if(PromptArray.contains('AllArrays')) {
    return PromptArray.getSome("AllArrays");
  } else {
    logging.log('No Prompts found');
    return [];
  }
}

export function getCandidatePair(prompt:string):string[]{
  if(CandidatePair.contains(prompt)){
    return CandidatePair.getSome(prompt);
  }
  else{
    logging.log('prompt not found');
    return [];
  }
}

export function getVotes(prompt: string): i32[]{
  if(voteArray.contains(prompt)) {
    return voteArray.getSome(prompt);
  } else {
    logging.log('Prompt not found for this vote');
    return [0, 0];
  }
}

// Change Methods

export function addUrl(name: string, url: string): void{
  CandidateURL.set(name, url);
  logging.log('added url for '+name);
}

export function addCandidatePair(prompt: string, name1: string, name2: string): void{
  CandidatePair.set(prompt, [name1, name2]);
}

export function addVote(prompt: string, index: i32): void{
  if(voteArray.contains(prompt)) {
    let tempArray = voteArray.getSome(prompt);
    let tempVal = tempArray[index];
    let newVal = tempVal + 1;
    tempArray[index] = newVal;
    voteArray.set(prompt, tempArray);
  } else {
    let newArray = [0, 0];
    newArray[index] = 1;
    voteArray.set(prompt, newArray);
  }
}

export function recordUser(prompt: string, user: string): void{
  if(userParticipation.contains(prompt)) {
    let tempArray = userParticipation.getSome(prompt);
    tempArray.push(user);
    userParticipation.set(prompt, tempArray);
  } else {
    userParticipation.set(prompt, [user]);
  }
}

export function addToPromptArray(prompt: string): void{
  logging.log('Added to prompt array.');
  if(PromptArray.contains("AllArrays")) {
    let tempArray = PromptArray.getSome("AllArrays");
    tempArray.push(prompt);
    PromptArray.set("AllArrays", tempArray);
  } else {
    PromptArray.set("AllArrays", [prompt]);
  }

}