import { firestore } from '@/services/firebase'

export const writeData = (data = []) => {
  console.log(`⚠️ Found ${data.length} items !`)

  data.map(async (item, index) => {
    const collectionRef = firestore.doc(`collection/${item.uid}`)

    const snapShot = await collectionRef.get()

    if (!snapShot.exists) {
      try {
        await collectionRef.set({
          ...data,
        })

        console.log(`✅ Item ${index} added with success !`)
      } catch (error) {
        console.log(`❌ Error creating item ${index}: `, error.message)
      }
    }

    console.log(`SnapShot already exists for item ${index} !`)
  })
}
