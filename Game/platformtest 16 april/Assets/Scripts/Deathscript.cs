using UnityEngine;
using System.Collections;
public enum WaterState
{
    inWater,
    notInWater,
}

public class Deathscript : MonoBehaviour
{

    void OnTriggerEnter2D(Collider2D collision)
    {

        if (collision.gameObject.tag == "KillCollider")
        {
            StopCoroutine("DrownTimer");
            waterState = WaterState.notInWater;
            StartCoroutine(DieAndRespawn());
            StartCoroutine(SpawnImmortalityVisuals());
        }

        else if (collision.gameObject.tag == "DrownTrigger")
        {
            waterState = WaterState.inWater;
            StartCoroutine("DrownTimer");
        }
    }

    void OnTriggerStay2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "KillCollider")
        {
            StartCoroutine(DieAndRespawn());
            StartCoroutine(SpawnImmortalityVisuals());
        }
    }
    
    void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.gameObject.tag =="DrownTrigger")
        {
            StopCoroutine("DrownTimer");
            waterState = WaterState.notInWater;
        }
    }

    GameObject[] spawnPoints;
    EdgeCollider2D deathCollider;
    Renderer rendParent;
    public WaterState waterState = WaterState.notInWater;
    
 
    void Start()
    {
        this.rendParent = GetComponentInParent<Renderer>();
        this.deathCollider = GetComponent<EdgeCollider2D>();
        //this.rigidParent = GetComponentInParent<Rigidbody2D>();
        //this.P1Movement = GetComponentInParent<Player1Movement>();
        //this.p2Movement = GetComponentInParent<Player2Movement>();
    }

    // Update is called once per frame
    void Update()
    {

    }

    IEnumerator DieAndRespawn()
    {
        RandomSpawn();
        deathCollider.enabled = false;
        yield return new WaitForSeconds(2.0f);
        deathCollider.enabled = true;


    }
    void RandomSpawn()
    {
        spawnPoints = GameObject.FindGameObjectsWithTag("Respawn");
        int  index = Random.Range(0, spawnPoints.Length);
        transform.parent.position = spawnPoints[index].transform.position;
    }
    IEnumerator SpawnImmortalityVisuals()
    {
        for (int i = 0; i < 5; i++)
        {
            rendParent.enabled = false;
            yield return new WaitForSeconds(0.2f);
            rendParent.enabled = true;
            yield return new WaitForSeconds(0.2f);
        }
    }

    IEnumerator DrownTimer()
    {
        yield return new WaitForSeconds(5.0f);
            StopCoroutine("DrownTimer");
            waterState = WaterState.notInWater;
            StartCoroutine(DieAndRespawn());
            StartCoroutine(SpawnImmortalityVisuals());
        
    }
}
