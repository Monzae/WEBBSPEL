using UnityEngine;
using System.Collections;

public class OutOfBounds : MonoBehaviour {
    GameObject[] spawnPoints;
	// Use this for initialization
	void Start () {
		
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

    void OnTriggerEnter2D(Collider2D other)
    {
        if(other.tag == "Player1")
        {
            spawnPoints = GameObject.FindGameObjectsWithTag("Respawn");
            int index = Random.Range(0, spawnPoints.Length);
            other.transform.position = spawnPoints[index].transform.position;
        }
        if (other.tag == "Player2")
        {
            spawnPoints = GameObject.FindGameObjectsWithTag("Respawn");
            int index = Random.Range(0, spawnPoints.Length);
            other.transform.position = spawnPoints[index].transform.position;
        }
    }

    
}
