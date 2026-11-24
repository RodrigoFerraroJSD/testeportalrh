(() => {
 const key = 'rhconnect-demo-employees-v1';
 const config = window.RH_FIREBASE_CONFIG || {};
 const enabled = !!(config.apiKey && config.projectId && config.appId);
 let remote;
 async function db(){
   if (!remote) remote = (async()=>{
     const {initializeApp}=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js');
     const auth=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js');
     const fs=await import('https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js');
     const app=initializeApp(config); const a=auth.getAuth(app);
     await auth.setPersistence(a,auth.browserLocalPersistence);
     await a.authStateReady();
     const user=a.currentUser || (await auth.signInAnonymously(a)).user;
     return {fs,ref:fs.collection(fs.getFirestore(app),'demoUsers',user.uid,'employees')};
   })().catch(e=>{remote=null;throw e});
   return remote;
 }
 window.RHStore={enabled,async load(){
   if(!enabled) return JSON.parse(localStorage.getItem(key)||'[]');
   const {fs,ref}=await db(); return (await fs.getDocs(ref)).docs.map(d=>d.data());
 },async add(record){
   if(!enabled){const rows=await this.load(); const index=rows.findIndex(r=>r.email.toLowerCase()===record.email.toLowerCase());if(index<0)rows.push(record);else rows[index]=record;localStorage.setItem(key,JSON.stringify(rows));return;}
   const {fs,ref}=await db(); await fs.setDoc(fs.doc(ref,encodeURIComponent(record.email.toLowerCase())),record);
 },async remove(email){
   if(!enabled){const rows=await this.load();localStorage.setItem(key,JSON.stringify(rows.filter(r=>r.email.toLowerCase()!==email.toLowerCase())));return;}
   const {fs,ref}=await db();await fs.deleteDoc(fs.doc(ref,encodeURIComponent(email.toLowerCase())));
 }};
})();